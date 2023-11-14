import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={classes.dialogItem}><NavLink to={`/dialogs/${props.id}`}>{props.userName} </NavLink></li>
    )
}

const DialogMessage = (props) => {
    return (
        <li className={classes.dialogMessage} >{props.message}</li>
    )
}

const Dialogs = () => {
    return (
   <div className={classes.dialogs}>
    <h2 className={classes.maintitle}>Dialogs</h2>
       <div className={classes.dialogsWrapper}>
        <ul className={`${classes.column} ${classes.leftColumn} ${classes.dialogList}`}>
             <DialogItem userName="User1" id='1' />
             <DialogItem userName="User2" id='2' />
             <DialogItem userName="User3" id='3' />
             <DialogItem userName="User4" id='4'/>

        </ul>

        <ul className={`${classes.column} ${classes.rightColumn} ${classes.dialogsMessages}`}>
            <DialogMessage message = 'Message 1' />
            <DialogMessage message = 'Message 2' />
            <DialogMessage message = 'Message 3' />
            <DialogMessage message = 'Message 4' />

        </ul>
       </div>

   </div> 
    )

}

export default Dialogs;