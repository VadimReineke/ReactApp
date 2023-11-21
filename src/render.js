import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { sidebarFriends, addPost, updatePostText, userMessages} from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const RenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} 
                 sidebarFriends={sidebarFriends()} 
                 addPost={addPost}
                 updatePostText = {updatePostText}
                 userMessages = {userMessages}
                 />

        </BrowserRouter>
    );
}

