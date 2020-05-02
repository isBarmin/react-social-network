import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './Navigation.scss';

const Navigation = (props) => {
  const { className } = props;
  const mainCls = 'nav';
  const classes = classNames({
    [mainCls]: true,
    [className]: className,
  });

  return (
    <nav className={classes}>
      <ul className={`${mainCls}__list`}>
        <li className={`${mainCls}__item`}>
          <NavLink
            to="/profile"
            className={`${mainCls}__link`}
            activeClassName={`${mainCls}__link--active`}
          >
            Profile
          </NavLink>
        </li>
        <li className={`${mainCls}__item`}>
          <NavLink
            to="/dialogs"
            className={`${mainCls}__link`}
            activeClassName={`${mainCls}__link--active`}
          >
            Dialogs
          </NavLink>
        </li>
        <li className={`${mainCls}__item`}>
          <NavLink
            to="/users"
            className={`${mainCls}__link`}
            activeClassName={`${mainCls}__link--active`}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
