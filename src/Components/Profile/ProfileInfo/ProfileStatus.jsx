import React from "react";
import classes from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: "Hello!"
    }

    editModeStatus = () => {
        this.setState({editMode: !this.state.editMode}) 
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.editModeStatus} className={classes.statusText}>{this.state.title}</span>
                </div>
                 }
                 {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.editModeStatus} className={classes.statusTextInput} defaultValue={this.state.title}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus