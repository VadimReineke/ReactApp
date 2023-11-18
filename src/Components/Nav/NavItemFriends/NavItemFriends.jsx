import React from "react";
import classes from './NavItemFriends.module.css'
import { NavLink } from "react-router-dom";

const NavItemFriends = (props) => {
    return (
        <div className={classes.friendItem}>
        <NavLink to={`/friends/${props.id}`} className={classes.friendsItemLink}>
        <img src={props.userAvatar} alt={`${props.userName} avatar`} className={classes.avatarPic}/>
        <p className={classes.userText}>{props.userName}</p> 
        </NavLink>
      </div>
    )
}

export default NavItemFriends;