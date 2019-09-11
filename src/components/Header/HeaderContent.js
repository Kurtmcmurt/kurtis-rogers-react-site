import React, { PureComponent, Fragment } from "react";
import HeaderContentNavi from "./HeaderContentNavi";
import { Typography, Button, Drawer, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Paragraph, Title } = Typography;

export default class HeaderContent extends PureComponent {
  state = { visible: false };

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
          shape="omitted"
          className="kr--mobile-menu-button"
          type="primary"
          style={{ borderRadius: "0" }}
          onClick={this.showDrawer}
        ></Button>
        <Drawer
          title={<Title style={{ marginBottom: 0 }} level={4}>Kurtis Rogers</Title>}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ backgroundColor: "#000000", padding: 0 }}
        >
          <Menu
            theme={"dark"}
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultOpenKeys={["sub1"]}
            selectedKeys={[this.state.current]}
            mode="inline"
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
        </Drawer>
      </Fragment>
    );
  }
}
