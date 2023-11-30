import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    sidebarFriends: sidebarReducer,
})

let store = createStore(reducers);

export default store;