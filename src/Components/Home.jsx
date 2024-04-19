import React from 'react'
import { useNavigate } from 'react-router-dom'
import myPhoto from './Media/post (4).jpg'
import { Button } from '@mui/material'

function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1 className='bg-blue-500 font-bold text-xl lg:text-2xl text-center text-white py-5 lg:p-8'>Social media posts templates</h1>
            </div>

            <section className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-full px-5 py-8 justify-items-center'>
                {[1, 2, 3].map((item) => (
                    <div className='lg:w-[320px] pb-3 rounded flex flex-col items-center justify-between bg-white hover:shadow hover:shadow-black'>
                        <img className='rounded' src={myPhoto} alt="option" />
                        <div className='flex justify-center p-2'>
                            <Button className='flex justify-center items-center' variant="contained" onClick={() => navigate('/twitter')}>
                                Create Post
                            </Button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Home


