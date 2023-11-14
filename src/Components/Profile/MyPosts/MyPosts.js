import React from "react";
import classes from './MyPosts.module.css';
import Form from "./Form/Form";
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>My posts</h2>

            <Form nameBtn = "Добавить"/>

            <ul className={classes.list}>
            <Post message="Это первый пост" likeCount='0'/>
            <Post message="Это Второй пост"likeCount='7'/>
            </ul>

        </div>
    )
}

export default MyPosts;