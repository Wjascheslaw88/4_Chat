import { create } from 'zustand'

// контракт на присвоение типа 
interface ChatNameType {
    ChatName: (chatName: string) => Promise<any>;
    NewChat: (nickName: string, chatName: string) => void;
}

// создается stora по которому мы будем иметь доступ к данным через хук
export const useChats = create<ChatNameType>((set) => ({

    // создаем асинхронную функцию с get запросом на back с именем получая данные и распаршивая запись в data
    ChatName: async (chatName: string) => {
        const response = await fetch(`http://localhost:3001/chat/${chatName}`);
        const data = await response.json();
        return data;
    },
    // создаем синхронную функцию с post запросом на отправку названия чата и имени 
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


