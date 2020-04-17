import React, { useState, useEffect } from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu
function Side() {
    const [count, setCount] = useState(0)
    const [rootSubmenuKeys] = ['sub1', 'sub2', 'sub4']
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    return (
        <div className="head">
            <div className="lg"></div>
            <span>
                Edit src/App.js and save to reload.
            </span>
      </div>
    )
}
export default Side
