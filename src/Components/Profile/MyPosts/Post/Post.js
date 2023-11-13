import React from "react";
import classes from './Post.module.css'

const Post = () => {
    return (
        <li className={classes.item}>
            <p className={classes.descr}>Тут какое-то описание поста</p>
        </li>
    )
}

export default Post;