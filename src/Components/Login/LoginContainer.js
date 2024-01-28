
import React from "react";
import { connect } from "react-redux";
import { getAuthUserData } from '../../redux/auth-reducer';
import Login from "./Login";
import ProfileContainer from "../Profile/ProfileContainer";


class LoginContainer extends React.Component {

    componentDidMount = () => {
      this.props.getAuthUserData()
    }
    
    render() {
        if (this.props.isAuth) {return <ProfileContainer {...this.props}/>}
        return <Login {...this.props} />
    }
}
let mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
  }



 export default connect(mapStateToProps, {getAuthUserData}) (LoginContainer);