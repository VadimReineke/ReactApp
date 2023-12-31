import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';




class HeaderContainer extends React.Component {

    componentDidMount = () => {
       authAPI.getAuth().then(data => {
            if(data.resultCode === 0) {this.props.setAuthUserData(data.data)}
          })
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)