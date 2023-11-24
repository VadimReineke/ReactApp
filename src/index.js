import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';
// import state, { sidebarFriends, 
//         addPost, 
//         updatePostText, 
//         userMessages,
//         updateDialogMessage,
//         addDialogMessage,
//         subscride } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {

    root.render(
        <BrowserRouter>
            <App state={store.getState()} 
                 sidebarFriends={store.sidebarFriends.bind(store)} 
                 addPost={store.addPost.bind(store)}
                 updatePostText = {store.updatePostText.bind(store)}
                 userMessages = {store.userMessages.bind(store)}
                 updateDialogMessage = {store.updateDialogMessage.bind(store)}
                 addDialogMessage ={store.addDialogMessage.bind(store)}
                 />

        </BrowserRouter>
    );
}
renderEntireTree(store.getState());

store.subscride(renderEntireTree);


