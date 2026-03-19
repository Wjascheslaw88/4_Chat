import { SetStateAction, useState } from "react";
import Registration from "./Registgration";
import Modal from "./Modal/Modal"
import { useNavigate } from "react-router-dom";
import {useChats} from '../../store/useChats'

const RegistrationConteiner = () => {


    const { ChatName, NewChat } = useChats()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate()

    const [nickName, setNickName] = useState('');
    const [chatName, setChatName] = useState('');

    const handleNickName = (e: { target: { value: SetStateAction<string>; }; }) => {
        setNickName(e.target.value);
    };

    const handleChatName = (e: {
        target: {
            value: SetStateAction<string>;
        };
    }) => {
        setChatName(e.target.value);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCheckChat = async () => {
        const data = await ChatName(chatName);
        if (data.error) {
            setIsModalOpen(true);
        } else {
            console.log('Найден чат:', data);
            navigate(`/${chatName}/${nickName}`);
        }
    };

    return (
        <>
            <Registration
                nickName={nickName}
                chatName={chatName}
                handleNickName={handleNickName}
                handleChatName={handleChatName}
                onClickButton={handleCheckChat}
            />
            {isModalOpen && <Modal
                onClickNewChat={() => NewChat(nickName, chatName)}
                setNickName={nickName}
                setChatName={chatName}
                onClose={closeModal} />}
        </>
    )
}

export default RegistrationConteiner;

