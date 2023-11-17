import React from "react";
import FriendList from './FriendsList/FriendsList';
import classes from './Friends.module.css';



const Friends = (props) => {

    return ( <div className={`${classes.friendsWrapper} ${classes.container}`} >
            <h2 className={classes.mainTitle}>Список друзей</h2>
            <FriendList state={props.state}/>
        </div>

    )
}

export default Friends;