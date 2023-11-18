import React from "react";
import classes from './Form.module.css'

const Form = (props) => {
    let newPost = React.createRef();
   
    let addPostFn = () => {
        let newPostText = newPost.current.value;
        alert(newPostText);
    }
    return (
        <form className={classes.form}>
            <textarea className={classes.textarea} ref={newPost}></textarea>
            <button className={`${classes.addButton} ${classes.btnReset}`} type="button" onClick={addPostFn}>{props.nameBtn}</button>
        </form>
    )
}

Form.defaultProps = {nameBtn: 'test'}


export default Form;