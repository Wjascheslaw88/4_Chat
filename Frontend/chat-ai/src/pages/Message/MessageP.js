import React from "react";
import css from "./Message.module"

const MessageP = (props)=>{

    return(
        <div className={css.mrapper}>
            <img className={css.images} alt="иконка" />
            <div className={css.nickAndMessage}>
                <div className={css.nickname}></div>
                <div className={css.message}></div>
            </div>
        </div>
    )
}


export default MessageP;