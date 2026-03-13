import MessageC from "../Message/MessageC";
import css from "./Chat_users.module.css"
import { Input } from "antd";



const ChatUserP = (props) => {

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
                    <MessageC
                        messages={props.messages}
                        userName={props.userName}
                    />
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