import { FC } from "react";
import Message from "../Message/MessageContainer";
import css from "./chat-users.module.css"
import { Input } from "antd";
import { MessageType } from "../../types";

type ChatUserPProps = {
    userName?: string;
    users?: string;
    chatName?: string;
    messages: MessageType[];
    onSend?: any;
    setTextInput?: any;
    onSearch?: any;
    textInput: string;
}

const ChatUser: FC<ChatUserPProps> = (props) => {

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
                    <Message />
                </div>
                <div className={css.input}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={props.onSend}
                        onChange={(sss) => { props.setTextInput(sss.target.value) }}
                        value={props.textInput}
                    />
                </div>
            </div>
        </div>)
}

export default ChatUser;