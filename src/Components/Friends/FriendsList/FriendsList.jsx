import React from "react";
import classes from '../Friends.module.css'
import FriendsItem from "../FriendsItem/FriendsItem";


const FriendsList = (props) => {
    let friendsArr = props.state.friendsData.map((el) => <FriendsItem userName={el.name} id={el.id} userAvatar ={el.avatar} key={el.id} />)  
    return (
        <ul className={classes.friendsList}>
            {friendsArr}
      </ul>
    )

}

export default FriendsList;