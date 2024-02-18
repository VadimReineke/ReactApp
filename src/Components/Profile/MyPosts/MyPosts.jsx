import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { requeired, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormControls/FormsControls";

let maxLength = maxLengthCreator(15)


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
        <Field component={Textarea} name='newPostText' placeholder='Введите текст' className={classes.textarea} validate={[requeired,maxLength]}/>
        <button className={`${classes.addButton} ${classes.btnReset}`}>Добавить</button>
    </form>
    )

}

const ReduxPostForm = reduxForm ({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

const MyPosts = (props) => {
   let postsArr = props.postData.map(el => <Post message={el.message} likeCount={el.likesCount} key={el.id}/> ) //получаем массив постов из index.js через пропсы и отрисовываем
       
    let addPostFn = (values) => {
        props.addPost(values.newPostText)
    }
    
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>My posts</h2>
            <ReduxPostForm onSubmit={addPostFn} />
            <ul className={classes.list}>
                {postsArr}
            </ul>
        </div>
    )
}


export default MyPosts;