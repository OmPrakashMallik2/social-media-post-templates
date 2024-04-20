import React, { useState } from 'react'
import { Avatar, Button, Switch } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import html2canva from 'html2canvas';

function Twitter() {

  const [blueTick, setBlueTick] = useState(false);
  const [fullName, setFullName] = useState('Full Name');
  const [username, setUsername] = useState('username');
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('Enjoy the journey. Enjoy every moment and quit worrying about winning and losing.');

  const handleDownloadImage = () => {
    const content = document.getElementById('print');
    html2canva(content).then((canvas) => {
      const dataURL = canvas.toDataURL('image/jpg')

      const link = document.createElement('a');
      link.download = 'post.jpg';
      link.href = dataURL;

      link.click();
    })
  }

  const handleChange = () => {
    setBlueTick(!blueTick)
  }

  const handleChangeName = (event) => {
    setFullName(event.target.value);
  }

  const handleChangeusername = (event) => {
    setUsername(event.target.value);
  }

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
    const newValue = event.target.value.replace(/ {2,}/g, '  ').replace(/\n\n+/g, '\n\n');
    setCaption(newValue);
  }
  const handleKeyDown = (event) => {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
      // Prevent the default behavior of adding a new line in the textarea
      event.preventDefault();
      // Insert a newline character at the current cursor position
      const textarea = event.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      setCaption(textarea.value.substring(0, start) + '\n' + textarea.value.substring(end));
      // Move the cursor to the position after the inserted newline
      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  }


  return (
    <div>
      <div>
        <h1 className='bg-blue-500 font-bold text-xl lg:text-2xl text-center text-white py-5 lg:p-8'>Twitter post template</h1>
      </div>

      <div className='flex flex-col lg:flex-row justify-between py-5'>

        <div className='lg:w-1/2 flex flex-col items-center'>

          <div id='print' className='w-[300px] lg:w-[375px] h-[400px] lg:h-[500px] bg-black text-white flex flex-col justify-center p-10 gap-5'>
            <div className='flex justify-start items-center gap-2'>
              <Avatar alt="Remy Sharp" src={image} />
              <div className=''>
                <div className='flex justify-center items-center'>
                  <p className='font-bold'>{fullName}</p>
                  {blueTick && < VerifiedIcon fontSize="small" className='text-blue-400' />}
                </div>
                <p className='text-neutral-400 font-bold'>@{username}</p>
              </div>
            </div>
            <div className=''>
              {/* <div className="text-left text-lg font-semibold" dangerouslySetInnerHTML={{ __html: caption.replace(/ /g, '&nbsp;&nbsp;').replace(/\n/g, '<br>') }} /> */}

              <p className='text-left text-lg font-semibold'>{caption}</p>
            </div>
          </div>
          <div className='flex justify-center p-2'>
            <Button className='flex justify-center items-center' variant="contained" onClick={handleDownloadImage}>
              Download Image
            </Button>
          </div>

        </div>


        <div class=' text-neutral-700 lg:w-1/2 p-5 lg:p-10 flex flex-col justify-between'>

          <div>
            <input class="border-2 rounded-md p-2 w-full" onChange={handleChangeName} value={fullName} type='text' placeholder='Name' />
          </div>

          <div>
            <input class="border-2 rounded-md p-2 w-full mt-2" onChange={handleChangeusername} value={username} type='text' placeholder='Username' />
          </div>

          <div>
            <p>Add a picture</p>
            <input class="mt-2" onChange={handleChangeImage} type='file' placeholder='Profile picture' />
          </div>

          <div>
            <textarea
              class="border-2 rounded-md p-2 w-full mt-2"
              onChange={handleChangeCaption}
              value={caption}
              placeholder='Content'
              onKeyDown={handleKeyDown}
            />
          </div>

          <div class='flex items-center mt-2'>
            <p class='font-bold mr-2 text-blue-400'>Blue Tick</p>
            <Switch
              label="iOS style"
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Twitter
