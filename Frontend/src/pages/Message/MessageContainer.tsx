// контейнерная компонента
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageType } from "../../types";
import Message from "./Message";
import { useMessages } from "../../store/useMessages";

const MessageContainer = () => {

    // кастомный хук в zustand 
    const { getMessageData, messagesData } = useMessages()

    // вызов при первой отрисовке хук жизненного цикла
    useEffect(() => {
        getMessageData(params.chatName)
        // интервальный вызов функции
        const interval = setInterval(() => {
            getMessageData(params.chatName)
        }, 500)
        // завершение интервального вызова после закрытия компоненты
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // возможность доставать данный из URL
    let params = useParams()

    // изменение массива данных пришедшего со state zustand с объявлением итипа
    // объявление кем является isAuthor строгое сравнение userName из URL с данными со state в каждом сообщении именем автора 
    return (
        <div >
            {messagesData.map((message: MessageType) => {
                const messageId = message.id || message.id || `msg-${Date.now()}-${Math.random()}`;
                const isAuthor = params.userName === message?.author?.name

                return (
                    <Message
                        key={messageId}
                        text={message.text}
                        author={message.author}
                        isAuthor={isAuthor}
                    />
                )
            })}
        </div>
    )
}

export default MessageContainer;