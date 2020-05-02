import React from 'react';
import { connect } from 'react-redux';
import { api } from '../../dal/api';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    api.auth().then((data) => {
      console.log(data);
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
