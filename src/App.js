import React from "react";
import './Css/App.css';
import './Css/normalize.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends.jsx";
import { Route, Routes } from "react-router-dom";



const App = (props) => {
  return (
      <div className="app-wrapper container">
        <Header />
        <Nav  sidebarFriendsData = {props.state.sidebarFriends.sidebarFriendsData}/>
        <main className='main'>
          <Routes>
            <Route path="/profile" element={<Profile 
                          profilePage={props.state.profilePage} 
                          dispatch = {props.dispatch}/>} />
            <Route path="/dialogs/*" element={<Dialogs 
                          dialogsPage = {props.state.dialogsPage}
                          dialogRenderData = {props.state.dialogsPage.dialogRenderData}
                          dispatch = {props.dispatch}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends/*" element={<Friends state={props.state.friendsPage} />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
