import React from "react";
import './Css/App.css';
import './Css/normalize.css';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import FriendsContainer from "./Components/Friends/FriendsContainer.jsx";
import NavContainer from "./Components/Nav/NavContainer.jsx";
import UsersContainer from "./Components/Users/UsersContainer.jsx";
import ProfileContainer from "./Components/Profile/ProfileContainer.jsx";
import HeaderContainer from "./Components/Header/HeaderContainer.jsx";



const App = (props) => {

  return (
      <div className="app-wrapper container">
        <HeaderContainer />
        <NavContainer  /> 
        <main className='main'>
          <Routes>
            <Route path="/profile/:userID?" element={<ProfileContainer />}/>
            {/* <Route path=":userId" element={<ProfileContainer />} /> */}
            <Route path="/dialogs/*" element={<DialogsContainer/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/friends/*" element={<FriendsContainer/>} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
