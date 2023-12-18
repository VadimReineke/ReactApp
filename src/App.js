import React from "react";
import './Css/App.css';
import './Css/normalize.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import FriendsContainer from "./Components/Friends/FriendsContainer.jsx";
import NavContainer from "./Components/Nav/NavContainer.jsx";



const App = (props) => {

  return (
      <div className="app-wrapper container">
        <Header />
        <NavContainer  /> 
        <main className='main'>
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/dialogs/*" element={<DialogsContainer/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends/*" element={<FriendsContainer/>} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
