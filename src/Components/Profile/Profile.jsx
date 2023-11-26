import React from "react";
import classes from './Profile.module.css';
import Hero from "./Hero/Hero"
import MyPosts from "./MyPosts/MyPosts";

const Profile= (props) => {

    return (
        <main className={classes.container}>           
         <Hero />
         <MyPosts profilePage={props.profilePage} 
                   dispatch = {props.dispatch}/>
        </main>
    )
}

export default Profile;