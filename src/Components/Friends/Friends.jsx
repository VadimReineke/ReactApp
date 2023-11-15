import React from "react";
import FriendList from './FriendsList/FriendsList'



const Friends = (props) => {

    return ( <div>
            <h2>Список друзей</h2>
            <FriendList state={props.state}/>
        </div>

    )
}

export default Friends;