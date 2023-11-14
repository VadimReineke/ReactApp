import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <li className={classes.item}>
            <p className={classes.descr}>{props.message}</p>
            <span className={classes.count}>like {props.likeCount}</span>
        </li>
    )
}

export default Post;