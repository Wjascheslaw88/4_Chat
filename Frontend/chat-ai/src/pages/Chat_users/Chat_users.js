import React, { useEffect } from "react";
import css from "./Chat_users.module.css";
import { Input, message } from "antd";
import { useLocation, useParams } from "react-router-dom";
import { Massage } from "../Massage"
const ChatUser = () => {

    let params = useParams();

    let location = useLocation()
    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    useEffect(() => {
        let loc = location
        let copi = params
        debugger
    }, [params, location]);


    const userName = params.userName
    const chatName = params.chatName

    const arr = [
        { id: 1, text: "text", date: new Date(), author: "Author1" },
        { id: 2, text: "text2", date: new Date(), author: "Author2" },
        { id: 3, text: "text3", date: new Date(), author: "Author3" }
    ]


    return (
        <div className={css.wrapper}>
            <div className={css.user}>
                <div className={css.myName}>{userName}</div>
                <div className={css.participants}></div>
            </div>
            <div className={css.chat}>
                <div className={css.nameChat}>{chatName}</div>
                <div className={css.chat_field}>
                    {JSON.stringify(arr[1])}

                    {arr.map((massage) => {
                        return ( <Massage 
                            text={massage.text}
                            id={massage.id}/>
                        )
                    })}
                </div>
                <div className={css.input}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChatUser;
