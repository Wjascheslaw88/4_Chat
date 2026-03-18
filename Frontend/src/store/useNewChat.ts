import { create } from 'zustand'

interface NewChatStore {
    NewChat: (nickName: string, chatName: string) => void;
}
export const useNewChat = create<NewChatStore>((set) => ({

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







