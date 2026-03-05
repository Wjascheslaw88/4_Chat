import React from "react";
import css from "./Message.module"

const MessageP = (props)=>{

    return(
        <div className={css.wrapper}>
            <img className={css.images} alt="иконка" />
            <div className={css.nickAndMessage}>
                <div className={css.nickname}>{props.author.name}</div>
                <div className={css.message}>{props.text}</div>
            </div>
        </div>
    )
}


export default MessageP;