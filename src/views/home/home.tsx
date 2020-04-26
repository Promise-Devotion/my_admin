import React, { useState, useEffect } from 'react'


function Home() {
    const [aa, useaa] = useState(0)
    console.log(aa)
    useEffect( () => {
        useaa(aa)
    }, [aa])

    return (
        <div>
            主页
        </div>
    )
}

export default Home
