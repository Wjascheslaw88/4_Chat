import { FC } from "react";
import css from "./message.module.css"
import { Author } from "../../types";

interface MessagePProps {
    text: string;
    author: Author;
    isAuthor: boolean;
}

const Message: FC<MessagePProps> = ({ text, author, isAuthor }) => {

    const messageClass = isAuthor ? css.myMessage : css.otherMessage;

    return (
        <div className={`${css.wrapper} ${messageClass}`}>
            <img className={css.images} alt="иконка" />
            <div className={css.nickAndMessage}>
                <div className={css.nickname}>{author.name}</div>
                <div className={css.message}>{text}</div>
            </div>
        </div>
    )
}


export default Message;