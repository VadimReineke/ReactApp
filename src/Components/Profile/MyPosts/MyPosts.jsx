import React from "react";
import classes from './MyPosts.module.css';
import Form from "./Form/Form";
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsArr = props.profilePage.postData.map(el => <Post message={el.message} likeCount={el.likesCount} key={el.id}/> ) //получаем массив постов из index.js через пропсы и отрисовываем

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>My posts</h2>

            <Form nameBtn = "Добавить" profilePage ={props.profilePage}  dispatch = {props.dispatch}/>

            <ul className={classes.list}>
                {postsArr}
            </ul>

        </div>
    )
}

export default MyPosts;