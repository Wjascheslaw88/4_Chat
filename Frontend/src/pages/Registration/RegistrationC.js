import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationP from "./RegistgrationP";
import Modal from "./Modal/Modal"

const Registration = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate()
    const [nickName, setNickName] = useState('');
    const [chatName, setChatName] = useState('');

    const handleNickName = (e) => {
        setNickName(e.target.value);
    };
    const handleChatName = (e) => {
        setChatName(e.target.value);
    };

    const fetchNewChat = async () => {
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

    const onClickNewChat = fetchNewChat

    const fetchChatName = async () => {
        fetch(`http://localhost:3001/chat/${chatName}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setIsModalOpen(true);
                    return;
                }
                console.log('Найден чат:', data);
                navigate(`/${chatName}/${nickName}`);
            })
            .catch(error => {
                console.error('Ошибка сети:', error);
                setIsModalOpen(false);
            });
    };

    const onClickButton = fetchChatName

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <RegistrationP
                nickName={nickName}
                chatName={chatName}
                handleNickName={handleNickName}
                handleChatName={handleChatName}
                onClickButton={onClickButton}
            />
            {isModalOpen && <Modal
            onClickNewChat={onClickNewChat}
                setNickName={nickName}
                setChatName={chatName}
                onClose={closeModal} />}
        </>
    )
}

export default Registration;