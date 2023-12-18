import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
   
    let postsArr = props.postData.map(el => <Post message={el.message} likeCount={el.likesCount} key={el.id}/> ) //получаем массив постов из index.js через пропсы и отрисовываем
    
    let newPost = React.createRef();
    
    let addPostFn = () => {
        props.addPost()
    }
    let onPostUpdate = () => {
        let newPostText = newPost.current.value;
        props.updateNewPostText(newPostText);
    }
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>My posts</h2>

            <form className={classes.form}>
            <textarea className={classes.textarea} 
                      ref={newPost} 
                      onChange={onPostUpdate} 
                      value={props.newText}/>
            <button className={`${classes.addButton} ${classes.btnReset}`} type="button" onClick={addPostFn}>Добавить</button>
        </form>

            <ul className={classes.list}>
                {postsArr}
            </ul>

        </div>
    )
}

export default MyPosts;