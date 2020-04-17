import React, { useState, useEffect } from 'react'
// import { render } from '@testing-library/react'
import Sider from '../sideBar/side';

function Layout() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <Sider></Sider>
            <div className="layout">
            
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        </div>
    )
}

export default Layout
