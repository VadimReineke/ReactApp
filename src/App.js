import React from "react";
import './Css/App.css';
import './Css/normalize.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
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
            <Route path="/profile" element={<Profile store={props.store}/>} />
            <Route path="/dialogs/*" element={<DialogsContainer store = {props.store}/>} />
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
