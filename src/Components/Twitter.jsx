import React, { useState } from 'react';
import { Avatar, Button, Switch, TextField } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import html2canvas from 'html2canvas';
import { Textarea } from '@mui/joy';

function Twitter() {
  const [blueTick, setBlueTick] = useState(false);
  const [fullName, setFullName] = useState('Full Name');
  const [username, setUsername] = useState('username');
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState(
    'Write your thought...'
  );

  const handleDownloadImage = () => {
    const content = document.getElementById('print');
    html2canvas(content).then((canvas) => {
      const dataURL = canvas.toDataURL('image/jpg');

      const link = document.createElement('a');
      link.download = 'post.jpg';
      link.href = dataURL;

      link.click();
    });
  };

  const handleChange = () => {
    setBlueTick(!blueTick);
  };

  const handleChangeName = (event) => {
    setFullName(event.target.value);
  };

  const handleChangeusername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Setting the image state to base64 string
    };
    if (file) {
      reader.readAsDataURL(file); // Reading the file as a data URL
    }
  };

  const handleChangeCaption = (event) => {
    const newValue = event.target.value;
    setCaption(newValue);
  };

  return (
    <div>
      <div className='w-full'>
        <h1 className='bg-blue-500 font-bold text-xl lg:text-2xl text-center text-white py-5 lg:p-8'>
          Twitter Post Template
        </h1>
      </div>

      <div className='flex flex-col lg:flex-row justify-between py-5 px-5 lg:px-10'>
        <div className='lg:w-1/2 flex flex-col items-center'>

          <div id='print' className=' w-[300px] lg:w-[375px] h-[400px] lg:h-[500px] bg-black text-white flex flex-col justify-center p-10 gap-5'>

            {/* start */}

            <div className='flex gap-2 items-center '>
              <div>
                <Avatar alt='Remy Sharp' src={image} />
              </div>
              <div className='flex flex-col mb-5 justify-start'>
                <p className='font-bold text-sm'>{fullName}</p>
                <p className='text-neutral-500 font-bold text-sm' >@{username}</p>
              </div>
              <div className='mb-7'>
                {blueTick && <VerifiedIcon fontSize='small' className='text-blue-400' />}
              </div>
            </div>

            {/* end */}


            <div className='p-2 rounded-md'>
              <p
                className='text-left text-sm font-semibold'
                style={{ wordWrap: 'break-word' }}
                dangerouslySetInnerHTML={{ __html: caption.replace(/ /g, '&nbsp;&nbsp;').replace(/\n/g, '<br>') }}
              />
            </div>
          </div>

          <div className='flex justify-center p-2'>
            <Button variant='contained' onClick={handleDownloadImage}>
              Download Post
            </Button>
          </div>
        </div>

        <div className='text-neutral-700 lg:w-1/2 p-5 lg:p-10 flex flex-col justify-between'>
          <TextField onChange={handleChangeName} id='outlined-basic' label='Full Name' variant='outlined' />
          <br />
          <TextField onChange={handleChangeusername} id='outlined-basic' label='Username' variant='outlined' />

          <div className='mt-4 bg-blue-300 rounded'>
            <p className='text-center py-1 font-bold'>Click to Add Picture</p>
            <input className='mt-2 cursor-pointer' onChange={handleChangeImage} type='file' placeholder='Profile picture' />
          </div>

          <div className='mt-4'>
            <Textarea
              placeholder='Type in here…'
              defaultValue={caption}
              minRows={2}
              maxRows={4}
              onChange={handleChangeCaption}
            />
          </div>

          <div className='flex items-center mt-4'>
            <p className='font-bold mr-2 text-blue-400'>Blue Tick</p>
            <Switch label='iOS style' onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Twitter;
