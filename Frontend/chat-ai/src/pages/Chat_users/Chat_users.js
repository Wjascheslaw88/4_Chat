import React from "react";
import css from "./Chat_users.module.css";
import { Input } from "antd";

const Chat_user = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.user}>user</div>
            <div className={css.chat}>
                <div className={css.chat_field}>
                    field
                </div>
                <div className={css.input}>
                     {/* <input placeholder="Введите текст" className={css.input_field}></input> */}
                   <Input 
    className={css.custom_input}
    placeholder="Введите сообщение..."
/>
                </div>
            </div>
        </div>
    );
};

export default Chat_user;
