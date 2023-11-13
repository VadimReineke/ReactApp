import React from "react";
import './Css/App.css';
import './Css/normalize.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";



const App = () => {
  return (
    <div className="app-wrapper container">
        <Header />
        <Nav />
        <Profile />
    </div>
  );
}

export default App;
