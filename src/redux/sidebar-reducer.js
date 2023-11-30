import { initialStateFriendsArray } from "./friends-reducer";

let initialState = {
    sidebarFriendsData: [],
}

let workArr = initialStateFriendsArray.friendsData;

    // создание рандомного массива из 3х друзей для отрисовки в sidebar
    let randomSidebarFriendsArr = () => {

        if (workArr.length > 3) {
            let copyArr = workArr.map(el => el);
            let newFriendArr = []
        
            do {
                let randomIndex = Math.floor(Math.random() * copyArr.length);
                let randomElement = copyArr[randomIndex];
                if (randomElement !== undefined) {
                    newFriendArr.push(randomElement);
                    delete copyArr[randomIndex];
                }
            } while (newFriendArr.length < 3)
    
           initialState.sidebarFriendsData = newFriendArr
        } else {
            initialState.sidebarFriendsData = workArr;
        }
    }

    randomSidebarFriendsArr();

const sidebarReducer = (state = initialState, action) => {
   
    
    if (action.type === 'SIDEBAR-FRIENDS' ) {
        
}

    return state

}

export default sidebarReducer;