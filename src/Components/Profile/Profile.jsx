import React from "react";
import classes from './Profile.module.css';
import Hero from "./Hero/Hero"
import MyPosts from "./MyPosts/MyPosts";

const Profile= () => {
    return (
        <main className={classes.container}>           
         <Hero />
         <MyPosts />
        </main>
    )
}

export default Profile;