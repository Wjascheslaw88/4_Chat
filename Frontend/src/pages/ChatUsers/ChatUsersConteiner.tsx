// контейнерная компонента со всей логикой 
import { useParams } from "react-router-dom";
import ChatUser from "./ChatUsers";
import { useState } from "react";
import { useMessages } from "../../store/useMessages";


// определение типов по TypeScript
type Params = {
    userName?: string;
    chatName?: string;
}

const ChatUsersConteiner = () => {

    // позволяет доставать данные с URL
    const params = useParams<Params>();

    // кастомный хук позволяющий свзываться с zustand
    const { messagesData, newMessage } = useMessages()

    // хук состояния встроенный в react
    //        до           после      состояние в котором кадждое изменение заменяет начальное состояние
    const [textInput, setTextInput] = useState<string>('');

    // обработчик событий в котором в newMessage передается пропсами такие поля как textInput, (chatName, userName достали из URL)
    // setTextInput делвет поля ввода пустым после вызова newMessage
    const onSend = () => {
        newMessage(textInput, params.chatName, params.userName)
        setTextInput('');
    }

    // пропсами прокинули внутрь презентационной компоненты 
    return (
        <ChatUser
            userName={params.userName}
            chatName={params.chatName}
            textInput={textInput}
            setTextInput={setTextInput}
            onSend={onSend}
            messages={messagesData}
        />
    );
};

export default ChatUsersConteiner;
