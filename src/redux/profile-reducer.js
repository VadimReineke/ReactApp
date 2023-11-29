
//Постоянные для работы с постами
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const ADD_POST = 'ADD-POST';


// функция нахождения и присвоения нового id 
const newId = (arr) => {
    let workArr = arr;
    if (workArr.length === 0) {
        let idMax = 1;
        return idMax
    } else {
        let idMax = Math.max(...workArr.map(i => i.id));
        idMax = idMax + 1;
        return idMax
    }
}

const profileReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_TEXT_POST:
            state.postText = action.postText;
            return state;
        case ADD_POST:
            let postObj = {
                id: newId(state.postData),
                message: state.postText,
                likesCount: 0
            }
            state.postData.push(postObj);
            state.postText = '';
            return state;

        default:
            return state
    }
}

// Добавление постов
export const onPostUpdateCreator = (newPostText) => ({ type: UPDATE_TEXT_POST, postText: newPostText });
export const addPostCreator = () => ({ type: ADD_POST });

export default profileReducer