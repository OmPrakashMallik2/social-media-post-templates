import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1 className='font-bold text-2xl text-blue-500'>Socil media posts templates</h1>
            <section className='m-5'>
                <div>
                    <Link className='p-3 bg-blue-400' to='/tweeter'>Tweeter</Link>
                </div>
            </section>
        </div>
    )
}

export default Home
