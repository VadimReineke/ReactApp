import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile= (props) => {

    return (
        <main className={classes.container}>           
         <ProfileInfo profile={props.profile}/>
         <MyPostsContainer/>
        </main>
    )
}

export default Profile;