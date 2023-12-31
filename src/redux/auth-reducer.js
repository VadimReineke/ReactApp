const SET_USER_DATA= 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}


const authReducer= (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state, 
                ...action.data,
                isAuth: true,
                // id: action.id,
                // email: action.email,
                // login: action.login
            }
        }

        default:
            return state
    }

    
}

export const setAuthUserData = (data) => ({type: SET_USER_DATA, data});

export default authReducer