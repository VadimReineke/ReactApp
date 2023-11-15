
let state = {
    // Создадим объекты в котором будут хранится данные для каждой страницы
    profilePage: {
        // Массив в котором хранятся данные для постов
        postData: [
            {id: 1, message: 'Это первый пост', likesCount: '0'},
            {id: 2, message: 'Это Второй пост', likesCount: '7'},
        ],

    },

    dialogsPage: {
                // Массив в котором хранятся данные Пользователей для списка диалогов
            dialogsData: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'},
                {id: 3, name: 'User3'},
                {id: 4, name: 'User4'}
            ],
// Массив в котором хранятся данные сообщений для диалогов
        messagesData: [
            {id: 1, message: 'Message 1'},
            {id: 2, message: 'Message 2'},
            {id: 3, message: 'Message 3'},
            {id: 4, message: 'Message 4'},
            {id: 5, message: 'Message 5'}
        ]
    }
}

export default state;