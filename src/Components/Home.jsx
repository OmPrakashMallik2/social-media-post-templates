import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Twitter from './Twitter'

function Home() {
    return (
        <div>
            home
            <Routes>
                <Route path='/tweeter' element={<Twitter />} />
            </Routes>
        </div>
    )
}

export default Home
