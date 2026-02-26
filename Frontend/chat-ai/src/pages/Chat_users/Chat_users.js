import React from "react";
import css from "./Chat_users.module.css";

const Chat_user = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.user}>user</div>
            <div className={css.chat}>
                <div className={css.chat_field}>
field
                </div>
                <div className={css.input}>
input
                </div>
            </div>
        </div>
    );
};

export default Chat_user;
