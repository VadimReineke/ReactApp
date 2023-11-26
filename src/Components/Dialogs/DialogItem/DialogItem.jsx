import React from "react";
import classes from '../Dialogs.module.css';
import { NavLink } from "react-router-dom";
import { actionCreaterSelectDialog } from "../../../redux/state";



// вынесли чаcть кода в компоненты для упрощения. Используем пропсы для передачи данных id и userName
const DialogItem = (props) => {

    let showDialog = () => {
        let userId = props.id;
        props.dispatch(actionCreaterSelectDialog(userId));
    }
    return (
        <li className={classes.dialogItem}>
        <NavLink to={`/dialogs/${props.id}`} className={classes.dialogLink} onClick={showDialog} >
            <img src={props.userAvatar} alt={`${props.userName} avatar`} className={classes.avatarPic}/>
            <p className={classes.userText}>{props.userName} </p> 
        </NavLink>
        </li>
    )
}

export default DialogItem;