import css from "./Chat_users.module.css"
import { Input } from "antd";



const ChatUserP = (props) => {

    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className={css.wrapper}>
            <div className={css.user}>
                <div className={css.myName}>{props.userName}</div>
                <div className={css.participants}></div>
            </div>
            <div className={css.chat}>
                <div className={css.nameChat}>{props.chatName}</div>
                <div className={css.chat_field}>

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
        </div>)
}

export default ChatUserP;