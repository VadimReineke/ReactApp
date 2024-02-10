import React from "react";
import classes from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    editModeStatus = () => {
         this.setState({editMode: !this.state.editMode});
         this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
         return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.editModeStatus} className={classes.statusText}>{this.props.status || "Введите статус"}</span>
                </div>
                 }
                 {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.editModeStatus} className={classes.statusTextInput} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus