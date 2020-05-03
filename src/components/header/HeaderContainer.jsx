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
    return <Header className="app__header" />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (data) => dispatch(thunk.auth(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
