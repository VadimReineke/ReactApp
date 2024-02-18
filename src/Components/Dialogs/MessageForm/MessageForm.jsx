import React from "react";
import classes from './MessageForm.module.css';
import { Field, reduxForm } from "redux-form";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.messageForm}> 
        <Field component="textarea" name="messageText" placeholder="Напишите сообщение..." className={classes.textareaForm} />
        <button className={`${classes.addButton} ${classes.btnReset}`}>Добавить</button>
       </form>
    )
}

const ReduxMessageForm = reduxForm({form: "messageForm"})(MessageForm)

export default ReduxMessageForm;