import { useParams } from "react-router-dom";
import ChatUser from "./ChatUsers";
import { useState } from "react";
import { useMessages } from "../../store/useMessages";



type Params = {
    userName?: string;
    chatName?: string;
}

const ChatUsersConteiner = () => {

    const params = useParams<Params>();

    const { messageData, newMessage } = useMessages()

    const [textInput, setTextInput] = useState<string>('');

    const onSend = () => {
        newMessage(textInput, params.chatName, params.userName)
        setTextInput('');
    }

    return (
        <ChatUser
            userName={params.userName}
            chatName={params.chatName}
            textInput={textInput}
            setTextInput={setTextInput}
            onSend={onSend}
            messages={messageData}
        />
    );
};

export default ChatUsersConteiner;
