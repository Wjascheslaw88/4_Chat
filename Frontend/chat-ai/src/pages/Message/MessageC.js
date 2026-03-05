import React, { useEffect, useState } from "react";
import MessageP from "./MessageP"
import { useParams } from "react-router-dom";


const MessageC = () => {

    let params = useParams()
    const userName = params.userName
    const chatName = params.chatName

    const [messageDate, setMessageDate] = useState([])
    useEffect(() => { fetchMessage() }, [])

    const fetchMessage = async () => {
        fetch(`http://localhost:3001/${chatName}`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setMessageDate(data);
                }

            })
    }
          
    return (
        <div >
            {messageDate.map(message => {


            const isAutor = userName===message?.autor?.name

                return(
                    <MessageP
                        text={message.text}
                        author={message.author.name}
                        isAutor
                    />      
                )
            })}
        </div>
    )
}

export default MessageC;
