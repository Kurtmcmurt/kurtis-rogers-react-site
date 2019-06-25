import React, { PureComponent, Fragment } from 'react';
import { Menu } from 'antd';
import { Link, NavLink } from 'react-router-dom';

export default class HeaderContentNavi extends PureComponent {
  render() {
    return (
      <Fragment>
        <Menu
          className="kr--main-nav"
          theme="dark"
          mode="horizontal"
          selectedKeys={window.location.key}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <NavLink exact to="/">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/about">About</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/contact">Contact</NavLink>
          </Menu.Item>
        </Menu>
      </Fragment>
    );
  }
}
