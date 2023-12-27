// Постоянные для работы с пользователями
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';



let initialState = {
    // Массив в котором хранятся данные для постов
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUserCount: 0,
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {                  
                    if (user.id === action.userId) {

                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }

        }

        case SET_USERS: {
            return {
                ...state, 
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        }

        default:
            return state
    }

    
}
// Подписаться или отписать от пользователя, выбрать страницу с пользователями
export const followAC = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCountAC = (totalUserCount) => ({type: SET_TOTAL_USERS_COUNT, totalUserCount: totalUserCount})

export default usersReducer