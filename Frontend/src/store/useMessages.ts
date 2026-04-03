// создыние Stor
import { create } from 'zustand'
import { MessageType } from '../types'

interface MessageStore {
    getMessageData: (chatName: string) => void;
    messagesData: MessageType[];
    newMessage: (text: string, chatName: string, author: string) => void;
    setMessagesData: (messages: MessageType[]) => void;
    setNewMessage: (message: MessageType) => void;
}

const socket = new WebSocket("ws://localhost:3001")

// создается stora по которому мы будем иметь доступ к данным через хук
export const useMessages = create<MessageStore>((set) => ({

    newMessage: (text, chatName, author) => {
        socket.send(JSON.stringify({ type: "newMessage", text, chatName, author }))
    },
    getMessageData: (chatName) => socket.send(JSON.stringify({ type: 'getMessages', chatName })),

    messagesData: [],

    setMessagesData: (messages) => set({ messagesData: messages }),

    setNewMessage: (message) => set(state => ({ messagesData: [...state.messagesData, message] }))
}))

socket.onmessage = (event) => {
    const data = JSON.parse(event.data)

    if (data.type === "getMessagesResult") {
        useMessages.getState().setMessagesData(data.messages)

    }

    if (data.type === "newMessageResult") {
        useMessages.getState().setNewMessage(data.message)
    }
}






// контракт на присвоение типа

//     // создаем асинхронную функцию с get запросом на back с именем получая данные и распаршивая запись в data которую мы положим в массив messagesDataи данные будут доступны в react через массив
//     getMessageData: async (chatName: any) => {
//         fetch(`/messageByChatName?chatName=${chatName}`)
//         .then((response) => response.json())
//         .then((data) => {
//                 set({ messagesData: data })
//         })
// },
//     // создаем асинхронную функцию с post запросом на back с данными получая обратный ответ и распаршивая запись в  dаtа которую мы положим в массив messageData данные будут доступны в react через массив
//     // массив копируется с данными из state и добовляется в конец списка новое сообщение
//    newMessage: (textInput: string, chatName: string, author: string) => {
//         fetch("/newMessage", {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             method: "POST",
//             body: JSON.stringify({
//                 text: textInput,
//                 chatName: chatName,
//                 author: author,
//             }),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data)
//                 if (data.success) {
//                     set((state: { messagesData: any[] }) => ({ messagesData: [...state.messagesData, data.message] }))
//                 }
//             });
//     }