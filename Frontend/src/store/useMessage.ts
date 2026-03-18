import { create } from 'zustand'

interface MessageStore {
    MessageData: (chatName: string) => Promise<any>;
}

export const useMessage = create<MessageStore>((set) => ({
    MessageData: async (chatName) => {
        const response = await fetch(`http://localhost:3001/messageByChatName?chatName=${chatName}`)
        const data = await response.json();
        return data;
    }
}))