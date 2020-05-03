import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './Header.scss';

const Header = (props) => {
  const { className, isAuth, login } = props;
  const mainCls = 'header';
  const classes = classNames({
    [mainCls]: true,
    [className]: className,
  });

  return (
    <header className={classes}>
      <div className={`${mainCls}__part`}>Header</div>

      <div className={`${mainCls}__part`}>
        <div className="user-block">
          {isAuth ? login : <NavLink to="/login">Login</NavLink>}
        </div>
      </div>
    </header>
  );
};

export default Header;
