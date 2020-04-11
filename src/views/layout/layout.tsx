import React, { useState, useEffect } from 'react'
// import { render } from '@testing-library/react'

function Layout() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    return (
        <div className="layout">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Layout
