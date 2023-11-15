import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Массив в котором хранятся данные для постов
    let postData = [
        {id: 1, message: 'Это первый пост', likesCount: '0'},
        {id: 2, message: 'Это Второй пост', likesCount: '7'},
    ]
// Массив в котором хранятся данные Пользователей для списка диалогов
    let dialogsData = [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'},
        {id: 4, name: 'User4'}
    ]
// Массив в котором хранятся данные сообщений для диалогов
    let messagesData = [
        {id: 1, message: 'Message 1'},
        {id: 2, message: 'Message 2'},
        {id: 3, message: 'Message 3'},
        {id: 4, message: 'Message 4'},
        {id: 5, message: 'Message 5'}
    ]


root.render(

    <App postData = {postData} dialogsData = {dialogsData} messagesData={messagesData}/>

);

