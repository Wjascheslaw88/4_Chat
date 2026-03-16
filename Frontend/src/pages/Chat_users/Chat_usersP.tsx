import { FC } from "react";
import MessageC from "../Message/MessageC";
import css from "./Chat_users.module.css"
import { Input } from "antd";
import { Message } from "../../types";

type ChatUserPProps = {
    userName?: string;
    users?: string;
    chatName?: string;
    messages: Message[];
    onSend?: any;
    setTextInput?: any;
    onSearch?: any;
    textInput: string;
}

const ChatUserP:FC<ChatUserPProps> = (props) => {

    const { Search } = Input;

    return (
        <div className={css.wrapper}>
            <div className={css.user}>
                <div className={css.myName}>{props.userName}{props.users}</div>
                <div className={css.participants}></div>
            </div>
            <div className={css.chat}>
                <div className={css.nameChat}>{props.chatName}</div>
                <div className={css.chat_field}>
                    <MessageC/>
                </div>
                <div className={css.input}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={props.onSend}
                        onChange={(sss) => {props.setTextInput(sss.target.value)}}
                        value={props.textInput}
                    />
                </div>
            </div>
        </div>)
}

export default ChatUserP;