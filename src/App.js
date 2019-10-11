import React from "react";
// import logo from "./logo.svg";
import "./App.less";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

/**
 * @description
 * @author 子弈
 * @param
 * @date 2019-09-29
 * @returns
 */

/**
 * @description
 * @author 子弈
 * @date 2019-10-10
 * @returns
 */
function App() {
  return (
    <Layout className="react-tutorial">
      {/* <Sider trigger={null} collapsible collapsed={this.state.collapsed}> */}
      <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          {/* <Icon
            className="trigger"
            type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.toggle}
          /> */}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>

      <style jsx>{`
        .trigger {
          font-size: 18px;
          line-height: 64px;
          padding: 0 24px;
          cursor: pointer;
          transition: color 0.3s;
        }

        .trigger:hover {
          color: #1890ff;
        }

        .logo {
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px;
        }
      `}</style>
    </Layout>
  );
}

export default App;
