import React from "react";
import css from "./Chat_users.module.css";

const Chat_user = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.user}></div>
            <div className={css.chat}></div>
        </div>
    );
};

export default Chat_user;
