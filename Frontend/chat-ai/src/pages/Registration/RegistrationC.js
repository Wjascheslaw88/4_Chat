import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationP from "./RegistgrationP";

const Registration = () => {
    
    const navigate = useNavigate()
    const [ nickName, setNickName ] = useState('');
    const [ chatName, setChatName ] = useState('');

    const handleNickName = (e) => {
    setNickName(e.target.value);
};
    const handleChatName = (e) => {
    setChatName(e.target.value);

};

    const hendleChat = () => {
        navigate(`/${chatName}/${nickName}`)
    } 

    return (
        <RegistrationP 
        nickName={nickName}
        chatName={chatName}
        handleNickName={handleNickName}
        handleChatName={handleChatName}
        hendleChat={hendleChat}
        />
    )
}

export default Registration;