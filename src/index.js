import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import state from './redux/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <App state={state}/>

);

