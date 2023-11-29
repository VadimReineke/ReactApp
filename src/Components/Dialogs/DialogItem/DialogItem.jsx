import React from "react";
import classes from '../Dialogs.module.css';
import { NavLink } from "react-router-dom";
import { selectDialogCreator } from "../../../redux/store";



// вынесли чаcть кода в компоненты для упрощения. Используем пропсы для передачи данных id и userName
const DialogItem = (props) => {

    let showDialog = () => {
        let userId = props.id;
        props.dispatch(selectDialogCreator(userId));
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