import React from "react";
import classes from './Form.module.css';
import { addPostCreator, onPostUpdateCreator } from "../../../../redux/profile-reducer";


const Form = (props) => {

   let newPost = React.createRef();
   
    let addPostFn = () => {
        props.dispatch(addPostCreator())
    }

    let onPostUpdate = () => {
        let newPostText = newPost.current.value;
        props.dispatch(onPostUpdateCreator(newPostText))
    }

    return (
        <form className={classes.form}>
            <textarea className={classes.textarea} 
                      ref={newPost} 
                      onChange={onPostUpdate} 
                      value={props.profilePage.postText}/>
            <button className={`${classes.addButton} ${classes.btnReset}`} type="button" onClick={addPostFn}>{props.nameBtn}</button>
        </form>
    )
}

Form.defaultProps = {nameBtn: 'test'}


export default Form;