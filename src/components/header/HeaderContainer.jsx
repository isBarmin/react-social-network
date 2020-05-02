import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return <Header className="app__header" />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
