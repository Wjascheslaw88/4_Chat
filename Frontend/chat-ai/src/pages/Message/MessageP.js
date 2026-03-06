import React from "react";
import css from "./Message.module.css"

const MessageP = (props)=>{

      const messageClass = props.isAutor ? css.myMessage : css.otherMessage;
    return(
        <div className={`${css.wrapper} ${messageClass}`}>
            <img className={css.images} alt="иконка" />
            <div className={css.nickAndMessage}>
                <div className={css.nickname}>{props.author}</div>
                <div className={css.message}>{props.text}</div>
            </div>
        </div>
    )
}


export default MessageP;