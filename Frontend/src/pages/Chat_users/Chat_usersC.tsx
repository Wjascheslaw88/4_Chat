import { useParams } from "react-router-dom";
import ChatUserP from "./Chat_usersP";
import {  useState, FC } from "react";
import { Message } from "../../types";

type ChatUserProps = {
    name:string
}
type Params = {
    userName?: string;
    chatName?: string;
}
type TextInputType = string

const ChatUser:FC<ChatUserProps> = (props) => {

    const [textInput, setTextInput] = useState<TextInputType>('');
    const [messageDate, setMessageDate] = useState<Message[]>([])


    const params = useParams<Params>();
    const userName = params.userName
    const chatName = params.chatName

    const onSend = () => {
        newMessage(textInput)()
        setTextInput('');
        
    }

    const newMessage = (textInput:TextInputType) => {
        return async () => {
            fetch("http://localhost:3001/newMessage", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    text: textInput,
                    chatName: chatName,
                    author: userName,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if (data.success) {
                        setMessageDate(prev => [...prev, data.message])
                    }
                });
        };
    }

    return (
        <ChatUserP
            userName={userName}
            chatName={chatName}
            textInput={textInput}
            setTextInput={setTextInput}
            onSend={onSend}
            messages={messageDate} 
        />
    );
};

export default ChatUser;
