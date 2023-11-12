import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProviders'

import './MessageSender.css'

function MessageSender() {
    const [{user}, dispatch] = useStateValue()
    const {input,setInput } = useState('')
    const {imageUrl, setImageUrl} = useState('')
    const   handleSubmit = (e)  =>{
        e.preventDefault();
    };
  return (
    <div className='messageSender'>
        <div className='messageSender_top'>
         <Avatar src={user.photoURL} />
            <form action="">
                <input 
                  value={input}
                  onChange={e=> setInput(e.target.value)}
                  className='messageSender_input'  placeholder={`what is in ur mind, ${user.displayName}?`} />
                <input 
                  value={imageUrl}
                  onChange={e=> setImageUrl(e.target.value)}

                placeholder='image URL' />

                <button onClick={handleSubmit} type='submit'> submit</button>
            </form>
       </div>   
        <div className='messageSender_bottom'>
            <div className='messageSender_option'>
                <VideocamIcon style={{color: "red"}} />
                <h3>Live video</h3>
            </div>
            <div className='messageSender_option'>
                     <PhotoLibraryIcon style={{color: "green"}}/>
                     <h3>Photo/Video</h3>
            </div>
            <div className='messageSender_option'>
                     <InsertEmoticonIcon style={{color: "orange"}}/>
                     <h3>Feeling/Activity</h3>
            </div>
        </div>    
    </div>
  )
}

export default MessageSender