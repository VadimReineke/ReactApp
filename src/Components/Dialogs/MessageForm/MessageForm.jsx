import React from "react";
import classes from './MessageForm.module.css'

const MessageForm = (props) => {
    let newMessage = React.createRef();
    let addMessage = () => {
    let text = newMessage.current.value
    alert(text);
    }

    return (
        <form className={classes.messageForm}> 
        <textarea placeholder="Напишите сообщение..." className={classes.textareaForm} ref={newMessage}></textarea>
        <button className={`${classes.addButton} ${classes.btnReset}`} type="button"
         onClick={addMessage}>Добавить</button>
       </form>
    )
}

export default MessageForm;