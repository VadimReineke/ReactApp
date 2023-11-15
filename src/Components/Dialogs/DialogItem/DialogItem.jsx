import React from "react";
import classes from '../Dialogs.module.css';
import { NavLink } from "react-router-dom";

// вынесли чаcть кода в компоненты для упрощения. Используем пропсы для передачи данных id и userName
const DialogItem = (props) => {
    return (
        <li className={classes.dialogItem}>
        <NavLink to={`/dialogs/${props.id}`} className={classes.dialogLink}>
            <img src={props.userAvatar} alt={`${props.userName} avatar`} className={classes.avatarPic}/>
            <p className={classes.userText}>{props.userName} </p> 
        </NavLink>
        </li>
    )
}

export default DialogItem;