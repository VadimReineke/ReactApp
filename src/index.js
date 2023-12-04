import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App 
            state={store.getState()}
                 dispatch = {store.dispatch.bind(store)}
                 store = {store} />
        </BrowserRouter>
    );
}
renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
});


