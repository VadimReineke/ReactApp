import React from "react";
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
        <div className={classes.container}>
        <ul className={classes.list}>
          <li className={classes.item}><a href="#" className={classes.link}>Profile</a></li>
          <li className={classes.item}><a href="#" className={classes.link}>Messages</a></li>
          <li className={classes.item}><a href="#" className={classes.link}>News</a></li>
          <li className={classes.item}><a href="#" className={classes.link}>Music</a></li>
          <li className={classes.item}><a href="#" className={classes.link}>Settings</a></li>
        </ul>
        </div>
      </nav>
    )
}

export default Nav;