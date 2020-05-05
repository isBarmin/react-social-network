import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as thunk from '../../store/profile/thunks';
import * as profileSelectors from '../../store/profile/selectors';
import * as authSelectors from '../../store/auth/selectors';
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

const mapStateToProps = (state) => ({
  profile: profileSelectors.userProfile(state),
  status: profileSelectors.status(state),
  authUserId: authSelectors.id(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: (userId) => dispatch(thunk.getUserProfile(userId)),
  getProfileStatus: (userId) => dispatch(thunk.getProfileStatus(userId)),
  updateStatus: (status) => dispatch(thunk.updateProfileStatus(status)),
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);
