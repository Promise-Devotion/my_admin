
import React, { useState, useEffect } from 'react'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu



const { Header, Content, Footer, Sider } = Layout;

function SideAndCon() {
  const [rootSubmenuKeys, setrootSubmenuKeys] = useState(['sub1', 'sub2', 'sub4'])
  const [openKeys, setopenKeys] = useState(['sub1'])

  const onOpenChange = (openKeys: any[]) => {
    const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setopenKeys(openKeys);
    } else {
      const l = latestOpenKey ? [latestOpenKey] : []
      openKeys = l
      setopenKeys(openKeys)
    }
  };
  const fetchData = (data: []) => {
    setTimeout(() => {
      setrootSubmenuKeys(['sub5', 'sub6', 'sub7'])
    }, 200);
  }
  useEffect(() => {
    onOpenChange(openKeys)
  }, [openKeys])
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark" 
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: 200 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>菜单一</span>
              </span>
            }
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <AppstoreOutlined />
                <span>菜单二</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <SettingOutlined />
                <span>菜单三</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
            <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
            <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
            <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
            <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
            <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
            <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
            <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
            <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
            <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
            <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          content
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default SideAndCon
