import React from "react";

const Nav = () => {
    return (
        <nav className="nav">
        <div className="nav-container">
        <ul className="nav__list">
          <li className="nav__item"><a href="#" className="nav__link">Profile</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Messages</a></li>
          <li className="nav__item"><a href="#" className="nav__link">News</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Music</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Settings</a></li>
        </ul>
        </div>
      </nav>
    )
}

export default Nav;