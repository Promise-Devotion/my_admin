
import React, { useState, useEffect } from 'react'
import {
  MailOutlined,
  UserOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import routers from '../../router/index'
import Head from '../head/head'
const { SubMenu } = Menu



const { Content, Footer, Sider } = Layout;

function SideAndCon() {
  const [rootSubmenuKeys, setrootSubmenuKeys] = useState(routers)
  const [openKeys, setopenKeys] = useState(['article'])


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
  useEffect(() => {
    onOpenChange(openKeys)
    setrootSubmenuKeys(routers)
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
          {
            rootSubmenuKeys.map((item: { path: string | number | undefined; title: string | number | undefined; children: Array<[]> | undefined; }) => {
              return (
                <SubMenu key={item.path} title={<span>
                  <MailOutlined />
                  <span>{item.title}</span>
                  </span>}>
                    {
                      item.children ? item.children.map((pitem: any) => {
                        return (
                          <Menu.Item key={pitem.path}>
                            <UserOutlined />
                            <span className="nav-text">{pitem.title}</span>
                          </Menu.Item>
                        )
                      }) : ''
                    }
                </SubMenu>
              )
            })
          }
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Head />
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
