import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageType } from "../../types";
import Message from "./Message";
import { useMessages } from "../../store/useMessages";

const MessageContainer = () => {

    const { getMessageData, messagesData } = useMessages()
  
    useEffect(() => {
         getMessageData(chatName)

        const interval = setInterval(() => {
             getMessageData(chatName)
        }, 500)

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let params = useParams()
    const chatName = params.chatName

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