import { useParams } from "react-router-dom";
import ChatUserP from "./Chat_usersP";
import { useEffect, useState } from "react";


const ChatUser = (props) => {

    useEffect(() => { fetchMessage() }, [])

    const [textInput, setTextInput] = useState('');
    const [messageDate, setMessageDate] = useState([])


    let params = useParams();

    const userName = params.userName
    const chatName = params.chatName

    const onSend = () => {
        newMessage(textInput)()
        setTextInput('');
        fetchMessage()
    }

    const fetchMessage = async () => {
        fetch(`http://localhost:3001/${chatName}`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setMessageDate(data);
                }

            })
    }

    const newMessage = (textInput) => {

        return async () => {
            fetch("http://localhost:3001/newMessage", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    message: textInput,
                    userName: userName,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if (data.success) {
                        setMessageDate(prev => [...prev, data.message])
                    }
                });
        };
    }


    return (
        <>
            <ChatUserP
                userName={userName}
                chatName={chatName}
                textInput={textInput}
                setTextInput={setTextInput}
                onSend={onSend}
                messages={messageDate}
            />
        </>

    );
};

export default ChatUser;
