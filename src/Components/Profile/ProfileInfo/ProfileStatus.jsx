import React, {useState} from "react";
import classes from './ProfileInfo.module.css';

const ProfileStatus = (props) => {

    const[editMode, setEditMode] = useState(false);

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }


     const[status, setStatusChange] = useState(props.status);

     const onStatusChange = (e) => {
            setStatusChange(e.currentTarget.value)
     }

         return (
            <div>
                {!editMode &&
                <div>
                   
                    <span onClick={activateMode} className={classes.statusText}>{props.status || "Введите статус"}</span>
                </div>
                 }
                 {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode} className={classes.statusTextInput} value={status}/>
                </div>
                }
            </div>
        )
    
}

export default ProfileStatus



// class ProfileStatus extends React.Component {

//     state = {
//         editMode: false,
//         status: this.props.status
//     }

//     editModeStatus = () => {
//          this.setState({editMode: !this.state.editMode});
//          this.props.updateStatus(this.state.status);
//     }

//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         });
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
       
//     }

//     render() {
   
//          return (
//             <div>
//                 {!this.state.editMode &&
//                 <div>
//                     <span onClick={this.editModeStatus} className={classes.statusText}>{this.props.status || "Введите статус"}</span>
//                 </div>
//                  }
//                  {this.state.editMode &&
//                 <div>
//                     <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.editModeStatus} className={classes.statusTextInput} value={this.state.status}/>
//                 </div>
//                 }
//             </div>
//         )
//     }
// }
