import React, { useState } from 'react';
import { Avatar, Button, Switch, TextField } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import html2canvas from 'html2canvas';
import { Textarea } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


function Twitter() {
  const [blueTick, setBlueTick] = useState(false);
  const [fullName, setFullName] = useState('Full Name');
  const [username, setUsername] = useState('username');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [caption, setCaption] = useState(
    'Write your thought here...'
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
      <div className='flex justify-center items-center gap-2 bg-blue-500  w-full'>
        <Button
          onClick={() => navigate("/")}
          variant="contained"
        >Home</Button>
        <h1 className='font-bold text-xl lg:text-2xl text-center text-white py-5 lg:p-8'>
          Twitter Post Template
        </h1>
      </div>

      <div className='flex flex-col lg:flex-row justify-between py-5 px-5 lg:px-10'>
        <div className='lg:w-1/2 flex flex-col items-center'>

          <div id='print' className=' w-[300px] lg:w-[375px] h-[400px] lg:h-[500px] bg-black text-white flex flex-col justify-center p-10 gap-5'>

            <div className='flex items-center '>
              <div className='mr-1.5'>
                <Avatar
                  alt='Remy Sharp'
                  sx={{ width: 34, height: 34 }}
                  className='object-cover object-center'
                  src={image}
                />
              </div>
              <div className='flex flex-col mb-5 justify-start'>
                <p className='font-semibold text-sm'>{fullName}</p>
                <p className='text-neutral-500 font-semibold text-sm' >@{username}</p>
              </div>
              <div className='mb-7 -ml-1'>
                {blueTick && <VerifiedIcon fontSize='small' className='text-blue-400' />}
              </div>
            </div>

            <div className='p-2 rounded-md'>
              <p
                className='text-left text-base'
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

        <div className='text-neutral-700 gap-3 lg:w-1/2 p-4 lg:p-10 flex flex-col justify-between'>
          <TextField onChange={handleChangeName} id='outlined-basic' label='Full Name' variant='outlined' />

          <TextField onChange={handleChangeusername} id='outlined-basic' label='Username' variant='outlined' />

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload image
            <VisuallyHiddenInput onChange={handleChangeImage} type="file" />
          </Button>

          <Textarea
            placeholder='Type in here…'
            defaultValue={caption}
            minRows={2}
            maxRows={4}
            onChange={handleChangeCaption}
          />

          <div className='flex items-center'>
            <p className='font-bold mr-2 text-blue-400'>Blue Tick</p>
            <Switch label='iOS style' onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Twitter;
