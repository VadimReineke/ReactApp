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
            <Post />
            </ul>

        </div>
    )
}

export default MyPosts;