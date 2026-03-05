import { useParams } from "react-router-dom";
import ChatUserP from "./Chat_usersP";
import { useState } from "react";

const ChatUser = () => {

    const [ textInput, setTextInput ] = useState('');

    let params = useParams();
    
    const userName = params.userName
    const chatName = params.chatName
    
    const onSend = () => {

    }

    return (
        <>
            <ChatUserP
                userName={userName}
                chatName={chatName}
                textInput={textInput}
                setTextInput={setTextInput}
                onSend={onSend}
            />
        </>

    );
};

export default ChatUser;
