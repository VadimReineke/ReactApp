import axios from "axios";

// создаем начальное состояние для работы с API
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,  // передавать куки 
    headers: {
        'API-KEY': '2b35fd25-f63c-46fc-aaa2-562b514c8129' //ключ для авторизации
    },


})


// объекты с функциями для запросов на сервер
export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    }

}


export const authAPI = {
    getAuth() {
        return instance.get(`/auth/me`, {
            withCredentials: true
        }).then(response => response.data)
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`).then(response => response.data)
    }
}


export const followAPI = {
    getFollowUser(userId) {
        return instance.delete(`/follow/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '2b35fd25-f63c-46fc-aaa2-562b514c8129'
            }

        }).then(response => response.data)
    }
}

export const unFollowAPI = {
    getUnfollowUser(userId) {
        return instance.post(`/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': '2b35fd25-f63c-46fc-aaa2-562b514c8129'
            }

        }).then(response => response.data)
    }
}

