import React from "react";
import css from "./Registration.module.css"
import { Button, Input } from "antd";

const Registration = () => {

    const inputField = document.querySelector('NickName');
    
inputField.addEventListener('input', function(event) {
    console.log('Текущий текст:', event.target.value);
});


return (
        <>
            <div className={css.wrapper} >
                <div className={css.InputBlock}>
                    <label className={css.label}>Nickname</label>
                    <Input id="NickName" required type="text" placeholder="Enter nickname" className={css.NickName}></Input>
                    <label className={css.label}>Chat name</label>
                    <Input id="ChatName" required type="text" placeholder="Enter the chat name" className={css.ChatName} value={""}></Input>
                    <Button className={css.Button}>Войти</Button>
                </div>
            </div>
            <Button className={css.buttonAI}>Chat AI</Button>
        </>
    )
}

export default Registration;