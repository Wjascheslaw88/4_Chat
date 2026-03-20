// контейнерная компонента
import { SetStateAction, useState } from "react";
import Registration from "./Registgration";
import Modal from "./Modal/Modal"
import { useNavigate } from "react-router-dom";
import { useChats } from '../../store/useChats'

const RegistrationConteiner = () => {

    // кастомный хук для связи со state zustand
    const { ChatName, NewChat } = useChats()
    // хук састояния модального окна
    const [isModalOpen, setIsModalOpen] = useState(false);
    // хук навигации перехода по существующему URL
    const navigate = useNavigate()
    // хук состояния до и после в поле заполнения для локального сохранения данных с полей ввода
    const [nickName, setNickName] = useState('');
    const [chatName, setChatName] = useState('');
    // обработчик именения и записи в состояние вызывается при вводе в поле
    const handleNickName = (e: { target: { value: SetStateAction<string>; }; }) => {
        setNickName(e.target.value);
    };
    // обработчик именения и записи в состояние вызывается при вводе в поле
    const handleChatName = (e: { target: { value: SetStateAction<string>; }; }) => {
        setChatName(e.target.value);
    };
    // обработчик события для изменения состояния на false
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // обработчик события который проверяет наличие чата с помощью вызова функции со State с параметром который находится в состоянии
    // если чата нет то в состояние модального окна в параметрах передается true 
    // если найден чат то использует хук навигации и переходь по тому что находиться в ссостояниях в полях ввода
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

