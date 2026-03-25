// создыние Stor
import { create } from 'zustand'
import { MessageType } from '../types'

// контракт на присвоение типа 
interface MessageStore {
    getMessageData: (chatName: string) => Promise<any>;
    messageData: MessageType[]
    messagesData: MessageType[]
    newMessage: (textInput: string, chatName: string, author: string) => void
}

// создается stora по которому мы будем иметь доступ к данным через хук
export const useMessages = create<MessageStore>((set) => ({

    messagesData: [],
    // создаем асинхронную функцию с get запросом на back с именем получая данные и распаршивая запись в data которую мы положим в массив messagesDataи данные будут доступны в react через массив
    getMessageData: async (chatName: any) => {
        fetch(`http://localhost:3001/messageByChatName?chatName=${chatName}`)
        .then((response) => response.json())
        .then((data) => {
                set({ messagesData: data })
        })
},
    
    messageData: [],
    // создаем асинхронную функцию с post запросом на back с данными получая обратный ответ и распаршивая запись в  dаtа которую мы положим в массив messageData данные будут доступны в react через массив
    // массив копируется с данными из state и добовляется в конец списка новое сообщение
   newMessage: (textInput: string, chatName: string, author: string) => {
        fetch("http://localhost:3001/newMessage", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                text: textInput,
                chatName: chatName,
                author: author,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.success) {
                    set((state: { messageData: any[] }) => ({ messageData: [...state.messageData, data.message] }))
                }
            });
    }
}))



