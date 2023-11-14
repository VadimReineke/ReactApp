import React from "react";
import './Css/App.css';
import './Css/normalize.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Music/Music";
import Settings from "./Components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";




const App = () => {
  return (
<BrowserRouter>
<div className="app-wrapper container">
                  <Header />
                  <Nav />
                  <main className='main'>
                    <Routes>
                      <Route path="/profile" element={<Profile />}/>  
                      <Route path="/dialogs" element={<Dialogs />}/> 
                      <Route path="/news" element={<News />}/>
                      <Route path="/music" element={<Music />}/>
                      <Route path="/settings" element={<Settings />}/>
                    </Routes>
                  </main>
              </div>
</BrowserRouter>


   
  );
}

export default App;
