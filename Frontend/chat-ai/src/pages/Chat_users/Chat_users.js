// import React, { useEffect } from "react";
import css from "./Chat_users.module.css";
import { Input } from "antd";
// import { useLocation, useParams } from "react-router-dom";

const ChatUser = () => {

    // let params = useParams();

    // let location = useLocation()


    
//    useEffect(() => {
//     let loc = location
//     let copi = params
//         // debugger
//     }, [params,location]);



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

export default ChatUser;
