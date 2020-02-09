import React, { PureComponent, Fragment } from "react";
import HeaderContentNavi from "./HeaderContentNavi";
import { Typography, Button, Drawer, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Paragraph, Title } = Typography;

export default class HeaderContent extends PureComponent {
  constructor() {
    super();

    this.state = { 
      visible: false,
      aboutColor: 'green'
    };

  }


  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Fragment>
        <div className="logo">
          <Paragraph
            code="true"
            style={{ color: "#ffffff", height: "auto", marginBottom: 0 }}
          >
            Kurtis Rogers
          </Paragraph>
        </div>
        <HeaderContentNavi />
        <Button
          icon="menu"
          className="kr--mobile-menu-button"
          type="primary"
          style={{ borderRadius: "0" }}
          onClick={this.showDrawer}
        ></Button>
        <Drawer
          className="kr--drawer-body"
          title={
            <div className="logo">
              <Paragraph
                code="true"
                style={{ color: "#ffffff", height: "auto", marginBottom: 0 }}
              >
                Kurtis Rogers
              </Paragraph>
            </div>
          }
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ backgroundColor: "#000000", padding: 0 }}
        >
          <Menu
            className="kr--mobile-nav"
            theme={"dark"}
            onClick={this.onClose}
            style={{ width: 256 }}
            mode="inline"
          >
            <Menu.Item key="1">
              <NavLink activeClassName={"active"} exact to="/">
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink activeClassName={"active"} to="/about">
                About
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink activeClassName={"active"} to="/blog">
                Blog
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink activeClassName={"active"} to="/contact">
                Contact
              </NavLink>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Fragment>
    );
  }
}
