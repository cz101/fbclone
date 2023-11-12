import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Post({profilePic,image,username,timestamp,message}) {
  return (
    <div className='post'> 
        <div className='post_top'>
            <Avatar src={profilePic} className='post_avatar'/>
            <div className='post_topInfo'>
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>

        <div className='post_bottom'>
            <p>{message}</p>
        </div>
        <div className='post_image'>
            <img src={image} alt="" />
        </div>

        <div className='post_options'>
            <div className='post_option'>
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className='post_option'>
                <CommentIcon />
                <p>Comment</p>
            </div>
            <div className='post_option'>
                <ShareIcon />
                <p>Share</p>
            </div>
            <div className='post_option'>             
               <AccountCircleIcon/>
               <ExpandMoreIcon />
            </div>
        </div>
    </div>
  )
}

export default Post