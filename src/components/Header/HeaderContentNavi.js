import React, { PureComponent, Fragment } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

export default class HeaderContentNavi extends PureComponent {
  
  render() {

    let activeColor = this.props.activeColor;
    console.log('head navi: ', this.props)

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
            <NavLink
              activeClassName={"active"}
              activeStyle={{
                background: activeColor,
                color: '#ffffff'
              }} 
              exact to="/">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink 
              activeClassName={"active"}
              activeStyle={{
                background: activeColor,
                color: '#ffffff'
              }} 
              to="/about">
              About
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink 
              activeClassName={"active"}
              activeStyle={{
                background: activeColor,
                color: '#ffffff'
              }} 
              to="/blog">
              Blog
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink 
              activeClassName={"active"}
              activeStyle={{
                background: activeColor,
                color: '#ffffff'
              }} 
              to="/contact">
              Contact
            </NavLink>
          </Menu.Item>
        </Menu>
      </Fragment>
    );
  }
}
