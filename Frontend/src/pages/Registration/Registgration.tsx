import React from "react";
import css from "./registration.module.css"
import { Button, Input } from "antd";
import { ValueType } from "rc-input/lib/interface";



const Registration = (props: {
    nickName: ValueType;
    handleNickName: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
    chatName: ValueType;
    handleChatName: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
    onClickButton: React.MouseEventHandler<HTMLElement>;
}) => {

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

export default Registration;