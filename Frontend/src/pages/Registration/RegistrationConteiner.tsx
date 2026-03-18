import { SetStateAction, useState } from "react";
import Registration from "./Registgration";
import Modal from "./Modal/Modal"
import { useNewChat } from "../../store/useNewChat";
import { useChatName } from "../../store/useChatName";
import { useNavigate } from "react-router-dom";

const RegistrationConteiner = () => {

    const { NewChat } = useNewChat()
    const { ChatName } = useChatName()

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
        const data = await ChatName(chatName);  // получаем данные

        if (data.error) {
            setIsModalOpen(true);  // открываем модалку
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