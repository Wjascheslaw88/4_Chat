
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "../../types";
import MessageP from "./MessageP";

const MessageC = () => {
    

    const [messages, setMessages] = useState<Message[]>([])
    
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
        .then((data: Message) => {
            if (Array.isArray(data)) {
                setMessages(data);
            }
        })
    }
    
    return (
        <div >
            {messages.map((message: Message) => {
                const messageId = message.id || message.id || `msg-${Date.now()}-${Math.random()}`;
                const isAuthor = userName === message?.author?.name
                

                   

                return (
                    <MessageP
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

export default MessageC;