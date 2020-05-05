import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as thunk from '../../store/profile/thunks';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { getUserProfile, getProfileStatus, authUserId, match } = this.props;
    const id = match.params.userId || authUserId;
    getUserProfile(id);
    getProfileStatus(id);
  }

  render() {
    const { match } = this.props;
    const noEditableStatus = Boolean(match.params.userId);
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Profile {...this.props} noEditableStatus={noEditableStatus} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: (userId) => dispatch(thunk.getUserProfile(userId)),
  getProfileStatus: (userId) => dispatch(thunk.getProfileStatus(userId)),
  updateStatus: (status) => dispatch(thunk.updateProfileStatus(status)),
});

const mapStateToProps = (state) => ({
  profile: state.profileReducer.userProfile,
  status: state.profileReducer.status,
  authUserId: state.authReducer.id,
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);
