import { useParams } from "react-router-dom";
import ChatUserP from "./Chat_usersP";

const ChatUser = () => {

    let params = useParams();

    const userName = params.userName
    const chatName = params.chatName


    return (
        <>
            <ChatUserP
                userName={userName}
                chatName={chatName}
            />
        </>

    );
};

export default ChatUser;
