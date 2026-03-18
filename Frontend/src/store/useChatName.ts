
import { create } from 'zustand'


interface ChatNameType {
    ChatName: (chatName: string) => Promise<any>;
}

export const useChatName = create<ChatNameType>((set) => ({

    ChatName: async (chatName: string) => {
        const response = await fetch(`http://localhost:3001/chat/${chatName}`);
        const data = await response.json();
        return data;
    },
}))
