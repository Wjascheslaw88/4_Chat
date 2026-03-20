// призентационная компонента служащая для отрисовки
import { FC } from "react";
import Message from "../Message/MessageContainer";
import css from "./chat-users.module.css"
import { Input } from "antd";
import { MessageType } from "../../types";

// определение типов по TS
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
    // логика ANT Disain
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
                    <Message/>
                </div>
                <div className={css.input}>
                    <Search // логика ANT Disain
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        // обработчик событий 
                        onSearch={props.onSend}
                        // позволяет записать в состояние введенный текст по нажатию
                        onChange={(sss) => { props.setTextInput(sss.target.value) }}
                        // то что демонстрируется в поле ввода 
                        value={props.textInput}
                    />
                </div>
            </div>
        </div>)
}

export default ChatUser;