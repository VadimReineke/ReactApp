import React from 'react';
import classes from './User.module.css'
import defaultAvatar from '../../assets/img/pngegg.png';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pagesArr = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i)
    }
    if (pagesArr.length > 15) {
        pagesArr.splice(30)
    }
    return <div className={classes.container}>
        <ul className={classes.paginationList}>
            {pagesArr.map(page => {
                return <li className={(props.currentPage === page) ? classes.selectedPage : 'false'} key={page + 1} onClick={(e) => { props.onPageChanged(page) }}>
                    <button className={classes.paginationButton}>{page}</button>
                </li>
            })}
        </ul>

        {props.users.map(u =>
            <div key={u.id} className={classes.userContainer}>
                    <NavLink to = {'/profile/' + u.id}> 
                <img className={classes.userAvatar} src={u.photos.small != null ? u.photos.small : defaultAvatar} alt={`${u.name} avatar`} />
                    </NavLink>
                <div className={classes.userWrapper}>

                    <ul className={classes.userList}>
                        <li className={`${classes.userText} ${classes.userItem}`}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </li>
                        <li className={`${classes.userText} ${classes.userItem}`}>
                            <div>u.location.country:  u.location.city</div>
                        </li>
                    </ul>

                    <div>
                        {u.followed
                            ? <button className={classes.followedButton} onClick={() => {

                               axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '2b35fd25-f63c-46fc-aaa2-562b514c8129'
                                }
                                    
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                         props.unfollow(u.id)
                                        }    
                                    }
                                  )}
                                }>unFollow</button>
                                
                            : <button className={classes.followedButton} onClick={() => { 
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '2b35fd25-f63c-46fc-aaa2-562b514c8129'
                                }
                                    
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                         props.follow(u.id) 
                                        }    
                                    }
                                  )}
                                }>follow</button>}
                    </div>
                </div>
            </div>
        )
        }

    </div>
}

export default Users;