import React from "react";
import classes from './Nav.module.css';
import {NavLink } from "react-router-dom";


//  Создаем переменную в которую приходит значение есть ли класс active при активной ссылке
// если есть то подставляем классы актив и простой если нет, то только простой
// classNameActive не заработал

const linkClasses = ({isActive}) => (isActive ? `${classes.activeLink} ${classes.link}` : `${classes.link}`);

const Nav = (props) => {

    return (
              <nav className={classes.nav}>
                <div className={classes.container}>
                  <ul className={classes.list}>
                    <li className={classes.item}><NavLink to="/profile" className = {linkClasses}>Profile</NavLink></li>
                    <li className={classes.item}><NavLink to="/dialogs" className = {linkClasses}>Messages</NavLink></li>
                    <li className={classes.item}><NavLink to="/news" className = {linkClasses}>News</NavLink></li>
                    <li className={classes.item}><NavLink to="/music" className = {linkClasses}>Music</NavLink></li>
                    <li className={classes.item}><NavLink to="/settings" className = {linkClasses}>Settings</NavLink></li>
                  </ul>
                
                  <div className={classes.friendsWrapper}><NavLink to="/friends" className = {linkClasses}>
                      <p className={classes.itemDescr}>Friends</p>
                      </NavLink>
                  </div>

                </div>
            </nav>
    )

}

export default Nav;