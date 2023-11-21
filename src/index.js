import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, { sidebarFriends, 
        addPost, 
        updatePostText, 
        userMessages,
        updateDialogMessage,
        addDialogMessage,
        subscride } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <App state={state} 
                 sidebarFriends={sidebarFriends()} 
                 addPost={addPost}
                 updatePostText = {updatePostText}
                 userMessages = {userMessages}
                 updateDialogMessage = {updateDialogMessage}
                 addDialogMessage ={addDialogMessage}
                 />

        </BrowserRouter>
    );
}
renderEntireTree(state);

subscride(renderEntireTree);


