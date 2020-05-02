import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import Navigation from './components/navigation/Navigation';
import Profile from './components/profile/Profile';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import './styles.scss';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <Navigation className="app__aside" />

      <div className="app__main">
        <Route path="/profile/:userId?" component={Profile} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
