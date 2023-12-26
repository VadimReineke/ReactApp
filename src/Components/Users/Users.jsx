import React from 'react';
import classes from './User.module.css'
import axios from 'axios';
import defaultAvatar from '../../assets/img/pngegg.png'



class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users/").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div className={classes.container}>
            {this.props.users.map(u =>
                    <div key={u.id} className={classes.userContainer}>

                        <img className={classes.userAvatar} src={u.photos.small != null ? u.photos.small : defaultAvatar} alt={`${u.name} avatar`} />

                        <div className={classes.userWrapper}>

                            <ul className={classes.userList}>
                                <li className={`${classes.userText} ${classes.userItem}`}>
                                    <div>
                                        {u.name}
                                    </div>
                                    <div>
                                        {u.status}
                                    </div>
                                </li>
                                <li className={`${classes.userText} ${classes.userItem}`}>
                                    <div>
                                        u.location.country:  u.location.city
                                    </div>
                                </li>
                            </ul>

                            <div>
                                {u.followed
                                    ? <button className={classes.followedButton} onClick={() => { this.props.unfollow(u.id) }}>unFollow</button>
                                    : <button className={classes.followedButton} onClick={() => { this.props.follow(u.id) }} >follow</button>}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    }
}

export default Users;