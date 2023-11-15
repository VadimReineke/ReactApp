import React from "react";
import classes from './MyPosts.module.css';
import Form from "./Form/Form";
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Это первый пост', likesCount: '0'},
        {id: 2, message: 'Это Второй пост', likesCount: '7'},
    ]

    let postsArr = postData.map(el => <Post message={el.message} likeCount={el.likesCount}/> )

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>My posts</h2>

            <Form nameBtn = "Добавить"/>

            <ul className={classes.list}>
                {postsArr}
            </ul>

        </div>
    )
}

export default MyPosts;