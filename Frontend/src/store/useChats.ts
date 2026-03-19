import { create } from 'zustand'


interface ChatNameType {
    ChatName: (chatName: string) => Promise<any>;
    NewChat: (nickName: string, chatName: string) => void;
}


export const useChats = create<ChatNameType>((set) => ({

    chatData: [],

    ChatName: async (chatName: string) => {
        const response = await fetch(`http://localhost:3001/chat/${chatName}`);
        const data = await response.json();
        return data;
    },

    NewChat: (nickName: string, chatName: string) => {
        fetch("http://localhost:3001/newchat", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                userName: nickName,
                chatName: chatName,
            }),
        })
    }
}))


