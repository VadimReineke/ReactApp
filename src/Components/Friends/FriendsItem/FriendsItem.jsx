import React from "react";
import classes from '../Friends.module.css'
import { NavLink } from "react-router-dom";


const FriendsItem = (props) => {
    return (
        <li className={classes.friendItem}>
        <NavLink to={`/friends/${props.id}`}>
        <img src={props.userAvatar} alt={`${props.userName} avatar`} className={classes.avatarPic}/>
        <p className={classes.userText}>{props.userName}</p> 
        </NavLink>
      </li>
    )
}

export default FriendsItem 