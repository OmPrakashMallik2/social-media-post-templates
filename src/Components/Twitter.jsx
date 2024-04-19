import React from 'react'
import myPhoto from './Media/myPhoto.jpg'
import { Avatar, Button } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';

function Twitter() {

  const handleDownloadImage = () => {
    console.log("donload image");
  }
  return (
    <div>

      <h1 className='text-2xl text-center font-bold text-blue-500'>Twitter Post Template</h1>
      <div className='flex justify-between p-3'>

        <div className='bg-pink-300 w-1/2 p-5'>

          <div>
            <input type='text' placeholder='Name' />
          </div>

          <div>
            <input type='text' placeholder='usename' />
          </div>

          <div>
            <input type='file' placeholder='profile picture' />
          </div>

          <div>
            <input type='text' placeholder='Content' />
          </div>

        </div>

        <div className='w-1/2 bg-purple-300 p-5'>

          <div class="relative" style="padding-top: 56.25%;">


            <div className='bg-black text-white flex flex-col'>
              <div className='flex items-center justify-center gap-2'>
                <Avatar alt="Remy Sharp" src={myPhoto} />
                <div className=''>
                  <div className='flex items-center gap-1'>
                    <p className='font-bold'>Om Prakash Mallik</p>
                    < VerifiedIcon fontSize="small" className='text-blue-400' />
                  </div>
                  <p className='text-neutral-400'>@omprakashmallik</p>
                </div>
              </div>
              <div>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam cupiditate ab eos saepe quidem ipsa cum, reprehenderit non blanditiis autem quisquam inventore quis, voluptas sit deleniti laborum aliquam sequi?</p>
              </div>
            </div>
          
          </div>

          <Button className='flex justify-center items-center' variant="contained" onClick={handleDownloadImage}>
            Download Image
          </Button>

        </div>
      </div>
    </div>
  )
}

export default Twitter
