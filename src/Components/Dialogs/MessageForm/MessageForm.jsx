import React from "react";
import classes from './MessageForm.module.css'

const MessageForm = (props) => {


    let newMessage = React.createRef();

    let addMessage = () => {
       
       props.dispatch({type: 'ADD-DIALOG-MESSAGE'})
    }

    let updateTextMessage = () => {
        let newTextMessage = newMessage.current.value;
        props.dispatch({type: 'UPDATE-DIALOG-MESSAGE', messageText: newTextMessage})
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