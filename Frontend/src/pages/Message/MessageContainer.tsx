import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageType } from "../../types";
import Message from "./Message";
import { useMessage } from "../../store/useMessage";

const MessageContainer = () => {

    const { MessageData } = useMessage()
    const [messages, setMessages] = useState<MessageType[]>([])

    const getMessages = async () => {
        const messages = await MessageData(chatName);
        setMessages(messages)
    }
    useEffect(() => {
        getMessages()

        const interval = setInterval(() => {
            getMessages()
        }, 500)

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let params = useParams()
    const chatName = params.chatName

    return (
        <div >
            {messages.map((message: MessageType) => {
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