import React from "react";
import classes from './MessageForm.module.css';
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Common/FormControls/FormsControls";
import { maxLengthCreator, requeired } from "../../../utils/validators/validators";

let maxLength = maxLengthCreator(400);

const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={classes.messageForm}> 
        <Field component={Textarea} name="messageText" placeholder="Напишите сообщение..." className={classes.textareaForm} validate={[requeired, maxLength]} />
        <button className={`${classes.addButton} ${classes.btnReset}`}>Добавить</button>
       </form>
    )
}

const ReduxMessageForm = reduxForm({form: "messageForm"})(MessageForm)

export default ReduxMessageForm;