import React from "react";
import classes from './MessageForm.module.css';
import { actionCreaterAddMessage, actionCreaterUpdateTextMessage } from "../../../redux/state";


const MessageForm = (props) => {
    let newMessage = React.createRef();
    let addMessage = () => {props.dispatch(actionCreaterAddMessage())}
    let updateTextMessage = () => {
        let newTextMessage = newMessage.current.value;
        props.dispatch(actionCreaterUpdateTextMessage(newTextMessage))
    }

    return (
        <form className={classes.messageForm}> 
        <textarea placeholder="Напишите сообщение..." 
                className={classes.textareaForm} 
                ref={newMessage} 
                onChange={updateTextMessage}
                value={props.initialMessageText}
                />
        <button className={`${classes.addButton} ${classes.btnReset}`} type="button"
         onClick={addMessage}>Добавить</button>
       </form>
    )
}

export default MessageForm;