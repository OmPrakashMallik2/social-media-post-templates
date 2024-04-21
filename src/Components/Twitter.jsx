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
    'Enjoy the journey. Enjoy every moment and quit worrying about winning and losing.'
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
      <div>
        <h1 className='bg-blue-500 font-bold text-xl lg:text-2xl text-center text-white py-5 lg:p-8'>
          Twitter Post Template
        </h1>
      </div>

      <div className='flex flex-col lg:flex-row justify-between py-5 px-5 lg:px-10'>
        <div className='lg:w-1/2 flex flex-col '>

          <div id='print' className='w-[300px] lg:w-[375px] h-[400px] lg:h-[500px] bg-black text-white flex flex-col justify-center p-10 gap-5'>
            
            <div className='flex justify-start'>
              <div className='flex items-end '>
                <Avatar alt='Remy Sharp' src={image} />
              </div>
              <div className='flex flex-col justify-start ml-1 rounded-md'>
                <p className='font-bold text-white'>{fullName}</p>
                <p className='text-neutral-400 font-bold'>@{username}</p>
              </div>
              <div className='ml-1 flex items-center '>
                {blueTick && <VerifiedIcon fontSize='small' className='text-blue-400' />}
              </div>
            </div>


            <div className='p-2 rounded-md'>
              <p
                className='text-left font-semibold'
                style={{ wordWrap: 'break-word' }}
                dangerouslySetInnerHTML={{ __html: caption.replace(/ /g, '&nbsp;&nbsp;').replace(/\n/g, '<br>') }}
              />
            </div>
          </div>

          <div className='flex justify-center p-2'>
            <Button variant='contained' onClick={handleDownloadImage}>
              Download Image
            </Button>
          </div>
        </div>

        <div className='text-neutral-700 lg:w-1/2 p-5 lg:p-10 flex flex-col justify-between'>
          <TextField onChange={handleChangeName} id='outlined-basic' label='Full Name' variant='outlined' />
          <br />
          <TextField onChange={handleChangeusername} id='outlined-basic' label='Username' variant='outlined' />

          <div className='mt-4'>
            <p>Add a Picture</p>
            <input className='mt-2' onChange={handleChangeImage} type='file' placeholder='Profile picture' />
          </div>

          <div className='mt-4'>
            <Textarea
              placeholder='Type in here…'
              defaultValue='Try to put text longer than 4 lines.'
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
