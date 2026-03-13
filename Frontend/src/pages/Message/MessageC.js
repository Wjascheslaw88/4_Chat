
import { useEffect, useState } from "react";
import MessageP from "./MessageP"
import { useParams } from "react-router-dom";


const MessageC = (props) => {
    

    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        fetchMessage()
        
        const interval = setInterval(() => {
            fetchMessage()
        }, 500)
        

        return () => clearInterval(interval)
    }, [])
    
    let params = useParams()
    const chatName = params.chatName
    const userName = params.userName
    
    
    const fetchMessage = async () => {
        fetch(`http://localhost:3001/messageByChatName?chatName=${chatName}`)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                setMessages(data);
            }
        })
    }
    
    return (
        <div >
            {messages.map(message => {
                const messageId = message.id || message._id || `msg-${Date.now()}-${Math.random()}`;
                const isAutor = userName === message?.author?.name
                

                   

                return (
                    <MessageP
                        key={messageId}
                        text={message.text}
                        author={message.author.name}
                        isAutor={isAutor}
                    />
                )
            })}
        </div>
    )
}

export default MessageC;