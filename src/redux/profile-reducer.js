
//Постоянные для работы с постами
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
        profile: null
        // profile: {
        //     "aboutMe": "я крутой чувак 1001%",
        //     "contacts": {
        //       "facebook": "facebook.com",
        //       "website": null,
        //       "vk": "vk.com/dimych",
        //       "twitter": "https://twitter.com/@sdf",
        //       "instagram": "instagra.com/sds",
        //       "youtube": null,
        //       "github": "github.com",
        //       "mainLink": null
        //     },
        //     "lookingForAJob": true,
        //     "lookingForAJobDescription": "не ищу, а дурачусь",
        //     "fullName": "samurai dimych",
        //     "userId": 2,
        //     "photos": {
        //       "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
        //       "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        //     }
        //   }
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
        default:
            return state
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile })
// Добавление постов
export const onPostUpdateCreator = (newPostText) => ({ type: UPDATE_TEXT_POST, newPostText: newPostText });
export const addPostCreator = () => ({ type: ADD_POST });

export default profileReducer