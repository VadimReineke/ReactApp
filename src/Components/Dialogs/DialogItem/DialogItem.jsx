import React from "react";
import classes from '../Dialogs.module.css';
import { NavLink } from "react-router-dom";

// вынесли чаcть кода в компоненты для упрощения. Используем пропсы для передачи данных id и userName
const DialogItem = (props) => {
    return (
        <li className={classes.dialogItem}><NavLink to={`/dialogs/${props.id}`}>{props.userName} </NavLink></li>
    )
}

export default DialogItem;