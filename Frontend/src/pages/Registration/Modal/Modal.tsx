// компонента модального окна регистрации
import { Button } from "antd"
import css from "./modal.module.css"
import { MouseEventHandler } from "react";



// в модальное окно с помощью props прокидываются данные
const Modal = (props: {
    setNickName: any;
    setChatName: any;
    onClickNewChat: MouseEventHandler<HTMLElement>;
    onClose: MouseEventHandler<HTMLElement>;
}) => {

    // на первый onClick вешается функция которую запросили с State для создания нового чата 
    // на второй onClick вешается функция которая изменяет состояние модального окна на false и закрывает модальное окно
    // в span написал сообщение и проктинул текст состояния в данный момент названия чата и имени
    return (
        <div className={css.wrapper}>
            <span className={css.span}>{`do you want to add a chat with ${props.setNickName} and ${props.setChatName}`} </span>
            <Button onClick={props.onClickNewChat} className={css.buttonAdd}>Add chat?</Button>
            <Button className={css.buttonClose} onClick={props.onClose}>close</Button>

        </div>
    )
}

export default Modal;