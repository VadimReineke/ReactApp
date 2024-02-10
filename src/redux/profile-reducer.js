
import { profileAPI } from "../api/api";

//Постоянные для работы с постами
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {

        // Массив в котором хранятся данные для постов
        postData: [
            { id: 1, message: 'Это первый пост', likesCount: '0' },
            { id: 2, message: 'Это второй пост', likesCount: '7' },
            { id: 5, message: 'Это третий пост', likesCount: '7' },
            { id: 12, message: 'Это четвертый пост', likesCount: '7' },
            { id: 10, message: 'Это пятый пост', likesCount: '7' },
        ],

        newPostText: '',
        profile: null,
        status: '',
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

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
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }
        default:
            return state
    }
}


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile })
export const setStatus = (status) => ({type: SET_STATUS, status:status})
// Добавление постов
export const onPostUpdateCreator = (newPostText) => ({ type: UPDATE_TEXT_POST, newPostText: newPostText });
export const addPostCreator = () => ({ type: ADD_POST });
//Загрузка профиля с сервера по Id
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => { 
        dispatch(setUserProfile(data))
   })
} 
// Загрузка статуса с сервера
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}

// обновление статуса на сервере

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        } 
    })
}

export default profileReducer