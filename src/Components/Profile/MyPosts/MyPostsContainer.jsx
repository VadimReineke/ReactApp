import React from "react";
import {addPostCreator, onPostUpdateCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
       
    let onAddPost = () => {
        props.store.dispatch(addPostCreator())
    }
    let onPostUpdate = (newPostText) => {
        props.store.dispatch(onPostUpdateCreator(newPostText))
    }
    return (
        <MyPosts updateNewPostText={onPostUpdate} addPost={onAddPost} postData={state.profilePage.postData} newText={state.profilePage.postText}/>
    )
}

export default MyPostsContainer;