import React from 'react';
import { connect } from 'react-redux';
import * as thunk from '../../store/auth/thunks';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    const { auth } = this.props;
    auth();
  }

  render() {
    const { isAuth, login } = this.props;

    return <Header className="app__header" isAuth={isAuth} login={login} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (data) => dispatch(thunk.auth(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
