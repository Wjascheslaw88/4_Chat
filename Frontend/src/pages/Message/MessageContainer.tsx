
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageType } from "../../types";
import Message from "./Message";

const MessageContainer = () => {


    const [messages, setMessages] = useState<MessageType[]>([])

    useEffect(() => {
        fetchMessage()

        const interval = setInterval(() => {
            fetchMessage()
        }, 500)


        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let params = useParams()
    const chatName = params.chatName
    const userName = params.userName


    const fetchMessage = async () => {
        fetch(`http://localhost:3001/messageByChatName?chatName=${chatName}`)
            .then(response => response.json())
            .then((data: MessageType) => {
                if (Array.isArray(data)) {
                    setMessages(data);
                }
            })
    }

    return (
        <div >
            {messages.map((message: MessageType) => {
                const messageId = message.id || message.id || `msg-${Date.now()}-${Math.random()}`;
                const isAuthor = userName === message?.author?.name




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