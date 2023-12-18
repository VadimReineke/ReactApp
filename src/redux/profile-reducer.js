
//Постоянные для работы с постами
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const ADD_POST = 'ADD-POST';

let initialState = {

        // Массив в котором хранятся данные для постов
        postData: [
            { id: 1, message: 'Это первый пост', likesCount: '0' },
            { id: 2, message: 'Это второй пост', likesCount: '7' },
            { id: 5, message: 'Это третий пост', likesCount: '7' },
            { id: 12, message: 'Это четвертый пост', likesCount: '7' },
            { id: 10, message: 'Это пятый пост', likesCount: '7' },
        ],

        newPostText: ''
}

// функция нахождения и присвоения нового id 
const newId = (arr) => {
    let workArr = arr;
    if (workArr.length === 0) {
        let idMax = 1;
        return idMax
    } else {
        // console.log(workArr.map(i => ))
        let idMax = Math.max(...workArr.map(i => i.id));
        idMax = idMax + 1;
        return idMax
    }
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_TEXT_POST:{
            return {
                ...state,
                newPostText: action.newPostText
            }
        }

        case ADD_POST: {
        let newPost = {
                id: newId(state.postData),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost ],
                newPostText: ''
            }
        }
        default:
            return state
    }
}

// Добавление постов
export const onPostUpdateCreator = (newPostText) => ({ type: UPDATE_TEXT_POST, newPostText: newPostText });
export const addPostCreator = () => ({ type: ADD_POST });

export default profileReducer