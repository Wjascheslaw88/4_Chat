import { useState } from "react";
import css from "./Registration.module.css"
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    
    const navigate = useNavigate()
    const [ nickName, setNickName ] = useState('');
    const [ chatName, setChatName ] = useState('');

    const handleNickName = (e) => {
    setNickName(e.target.value);
};
    const handleChatName = (e) => {
    setChatName(e.target.value);

};

    const hendleChat = () => {
        navigate(`/${chatName}`)
    }

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
                    value={nickName}
                    onChange={handleNickName}
                    />
                    
                    <label className={css.label}>Chat name</label>
                    <Input 
                    id="ChatName" 
                    required 
                    type="text" 
                    placeholder="Enter the chat name" 
                    className={css.ChatName} 
                    value={chatName}
                    onChange={handleChatName}
                    />
                    

                    <Button onClick={hendleChat} className={css.Button}>Войти</Button>
                </div>
            </div>
            <Button  className={css.buttonAI}>Chat AI</Button>
        </>
    )
}

export default Registration;