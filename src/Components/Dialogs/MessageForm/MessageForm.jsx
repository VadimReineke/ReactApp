import React from "react";
import classes from './MessageForm.module.css';
import { addMessageCreator, updateTextMessageCreator } from "../../../redux/store";


const MessageForm = (props) => {

    let addMessage = () => {props.dispatch(addMessageCreator())}
    let updateTextMessage = (e) => {
        let newTextMessage = e.target.value;
        props.dispatch(updateTextMessageCreator(newTextMessage))
    }

    return (
        <form className={classes.messageForm}> 
        <textarea placeholder="Напишите сообщение..." 
                className={classes.textareaForm} 
                onChange={updateTextMessage}
                value={props.initialMessageText}
                />
        <button className={`${classes.addButton} ${classes.btnReset}`} type="button"
         onClick={addMessage}>Добавить</button>
       </form>
    )
}

export default MessageForm;