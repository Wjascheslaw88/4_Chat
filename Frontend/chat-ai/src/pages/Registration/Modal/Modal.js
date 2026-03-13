import { Button } from "antd"
import css from "./Modal.module.css"




const Modal =(props) =>{


    return(
        <div className={css.wrapper}>
        <span className={css.span}>{`do you want to add a chat with ${props.setNickName} and ${props.setChatName}`} </span>
            <Button onClick={props.onClickNewChat} className={css.buttonAdd}>Add chat?</Button>
            <Button className={css.buttonClose} onClick={props.onClose}>close</Button>

        </div>
    )
}

export default Modal;