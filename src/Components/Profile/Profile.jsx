import React from "react";
import classes from './Profile.module.css';
import Hero from "./Hero/Hero"
import MyPosts from "./MyPosts/MyPosts";

const Profile= (props) => {
    console.log(props)
    return (
        <main className={classes.container}>           
         <Hero />
         <MyPosts profilePage={props.profilePage} 
                  addPost={props.addPost} 
                  updatePostText = {props.updatePostText}
        />
        </main>
    )
}

export default Profile;