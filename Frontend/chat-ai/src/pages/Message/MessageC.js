import React, { useEffect, useState } from "react";
import MessageP from "./MessageP"


const MessageC = () => {

    const [messageDate, setMessageDate] = useState([])
    useEffect(() => { fetchMessage()}, [])

    const fetchMessage = async () => {
            fetch("http://localhost:3001/chat1")
            .then(response => response.json())
                .then(data => {
                if (Array.isArray(data)) {
                    setMessageDate(data);
                }
                        
                 })
        }
    return (
        <div className="chat-container">
            {messageDate.map(message => (
                <MessageP
                    text={message.text}
                    author={message.author.name}
                />
            ))}
        </div>
    )
}

export default MessageC;