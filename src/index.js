import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={store.getState()}
                 randomSidebarFriendsArr = {store.randomSidebarFriendsArr()} 
                 dispatch = {store.dispatch.bind(store)} />
        </BrowserRouter>
    );
}
renderEntireTree(store.getState());

store.subscride(renderEntireTree);


