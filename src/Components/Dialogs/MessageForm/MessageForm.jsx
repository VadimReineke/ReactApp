import React from "react";
import classes from './MessageForm.module.css';

const MessageForm = (props) => {

    let addMessage = () => {props.addMessage()}
    let updateTextMessage = (e) => {
        let newTextMessage = e.target.value;
        props.updateNewMessageText(newTextMessage)
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