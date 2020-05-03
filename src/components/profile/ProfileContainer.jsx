import React from 'react';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Profile from './Profile';

// eslint-disable-next-line react/prefer-stateless-function
class ProfileContainer extends React.Component {
  render() {
    return <Profile />;
  }
}

export default compose(withAuthRedirect)(ProfileContainer);
