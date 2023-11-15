import React from "react";
import classes from '../Dialogs.module.css';

const DialogMessage = (props) => {
    return (
        <li className={classes.dialogMessage} >{props.message}</li>
    )
}

export default DialogMessage