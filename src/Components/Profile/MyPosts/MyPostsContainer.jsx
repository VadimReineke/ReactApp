import { addPostCreator, onPostUpdateCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//     let state = props.store.getState();

//     let onAddPost = () => {
//         props.store.dispatch(addPostCreator())
//     }
//     let onPostUpdate = (newPostText) => {
//         props.store.dispatch(onPostUpdateCreator(newPostText))
//     }
//     return (
//         <MyPosts updateNewPostText={onPostUpdate} addPost={onAddPost} postData={state.profilePage.postData} newText={state.profilePage.postText}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newPostText) => {
            dispatch(onPostUpdateCreator(newPostText))
        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;