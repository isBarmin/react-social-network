import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as thunk from '../../store/profile/thunks';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Profile from './Profile';

// eslint-disable-next-line react/prefer-stateless-function
class ProfileContainer extends React.Component {
  componentDidMount() {
    const { getUserProfile, authUserId, match } = this.props;
    const id = match.params.userId || authUserId;
    getUserProfile(id);
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer.userProfile,
  authUserId: state.authReducer.id,
});

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: (userId) => dispatch(thunk.getUserProfile(userId)),
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);
