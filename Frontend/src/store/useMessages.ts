import { create } from 'zustand'
import { MessageType } from '../types'

interface MessageStore {
    getMessageData: (chatName: string) => Promise<any>;
    messageData: MessageType[]
    messagesData: MessageType[]
    newMessage: (textInput: string, chatName: string, author: string) => void
}


export const useMessages = create<MessageStore>((set) => ({

    messagesData: [],

    getMessageData: async (chatName: any) => {

        fetch(`http://localhost:3001/messageByChatName?chatName=${chatName}`)
        .then((response) => response.json())
        .then((data) => {
                set({ messagesData: data })

        })
},
    
    messageData: [],
    
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



