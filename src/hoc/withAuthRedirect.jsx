import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    const { isAuth } = props;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return !isAuth ? <Redirect to="/login" /> : <Component {...props} />;
  };

  return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
