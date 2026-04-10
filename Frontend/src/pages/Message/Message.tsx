// презинтационная компонента
import { FC } from "react";
import css from "./message.module.css"
import { Author } from "../../types";

// определение типов  TS
interface MessagePProps {
    text: string;
    author: Author;
    isAuthor: boolean;
}

// компонент с названием и типом котроная принимает 3 свойства из props
const Message: FC<MessagePProps> = ({ text, author, isAuthor }) => {

    // определение какой css испрользовать c помощью тернарного оператора 
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