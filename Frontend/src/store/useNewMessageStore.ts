import { create } from 'zustand'
import { MessageType } from '../types'

type UseNewMessageStore = {
    messageData: MessageType[]
    newMessage: (textInput: string, chatName: string, author: string) => void
}

export const useNewMessageStore = create<UseNewMessageStore>((set) => ({
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
})
)