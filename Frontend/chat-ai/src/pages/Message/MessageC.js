
import MessageP from "./MessageP"
import { useParams } from "react-router-dom";


const MessageC = (props) => {

    let params = useParams()
    const userName = params.userName


    return (
        <div >
            {props.messages.map(message => {


                const isAutor = userName === message?.author?.name

                return (
                    <MessageP
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