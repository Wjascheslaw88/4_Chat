// это не нормально не пользоваться и не смотреть на них
const users = [
    {
        id: "admin1",
        name: "admin1",
        email: "admin@example.com",
        roles: ["ADMIN", "USER"],
        permissions: ["READ", "WRITE", "DELETE", "ADMIN_PANEL"],
        status: "active"
    }
];
const chat1 = {
    id: "id1",
    name: "chat1",
    users: [users[0], users[1]]
}

const messageUser1 = {
    id: "idm1",
    text: "",
    chatName: "chat1",
    author: users[0]
}
//тоо что можно доставать 
const messages = [ messageUser1 ]

const chats = [ chat1 ]

//#####################################
const findAllUsers = () => {
    return users;
};
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
    return(msg)
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
    findAllUsers,
};