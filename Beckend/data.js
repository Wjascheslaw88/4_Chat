// это не нормально не пользоваться и не смотреть на них
const user1 = {
    id: "idu1",
    name: "user1",
}

const chat1 = {
    id: "id1",
    name: "chat1",
    users: [user1]
}

const messageUser1 = {
    id: "idm1",
    text: "",
    chatName: "chat1",
    author: user1
}
//тоо что можно доставать 
const messages = [
    messageUser1
]

const chats = [
    chat1
]
//#####################################
const findChatName = (chatName) => {
    return chats.find((chat) => {
        return chat.name === chatName
    })
}

const findMessagesByChatName = (chatName) => {
    return messages.filter((message) => {
        return message.chatName === chatName
    })
}

const findUsrersByChatName = (chatName) => {
    const findedChat = chats.find((chat) => {
        return chat.name === chatName
    })
    return findedChat.users
}

const creatNewMessage = (text, chatName, author) => {
    const msg = {
        id: Date.now(),
        text: text,
        chatName: chatName,
        author: {
            name: author
        }
    }
    messages.push(msg)
};


const createNewChat = (chatName, userName) => {
    const chat = {
        id: Date.now(),
        name: chatName,
        users: [userName],
    }
    chats.push(chat)
    return chat
}


module.exports = {
    findChatName,
    findMessagesByChatName,
    findUsrersByChatName,
    creatNewMessage,
    createNewChat,
};