import React from "react";
import classes from './Profile.module.css';
import Hero from "./Hero/Hero"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile= (props) => {

    return (
        <main className={classes.container}>           
         <Hero />
         <MyPostsContainer store = {props.store}/>
        </main>
    )
}

export default Profile;