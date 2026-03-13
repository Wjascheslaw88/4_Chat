import React from "react";
import css from "./Registration.module.css"
import { Button, Input } from "antd";



const RegistrationP = (props) => {

    return (
        <>
            <div className={css.wrapper} >
                <div className={css.InputBlock}>
                    <label className={css.label}>Nickname</label>
                    <Input
                        id="NickName"
                        required
                        type="text"
                        placeholder="Enter nickname"
                        className={css.NickName}
                        value={props.nickName}
                        onChange={props.handleNickName}
                    />

                    <label className={css.label}>Chat name</label>
                    <Input
                        id="ChatName"
                        required
                        type="text"
                        placeholder="Enter the chat name"
                        className={css.ChatName}
                        value={props.chatName}
                        onChange={props.handleChatName}
                    />
                    <Button 
                    onClick={props.onClickButton}
                    className={css.Button}>Войти</Button>
                </div>
            </div>
            <Button className={css.buttonAI}>Chat AI</Button>
        </>
    )
}

export default RegistrationP;