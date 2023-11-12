import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProviders'

function Header() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className='header'>
        <div className="header_left">    
            <img 
                src="https://scontent-fra5-2.xx.fbcdn.net/v/t39.8562-6/379289821_865934508418540_8644135502492996297_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=vbHHQ3iIRZIAX83gETC&_nc_ht=scontent-fra5-2.xx&oh=00_AfBZTpV7wfbB_NAB-Y7Dy4Qk5d0AaHN-UE948dxWy3L1cg&oe=654108FB" 
                alt="" 
            />
            <div className="header_input">
               <SearchIcon />
               <input  placeholder = 'Search ' type="text" />
            </div>
        </div>

        <div className="header_center">
          <div className="header_option header_option--active">
                <HomeIcon fontSize='large'/>
          </div>
          <div className="header_option">
                <FlagIcon fontSize='large'/>
          </div>
          <div className="header_option ">
                < StorefrontIcon fontSize='large'/>
          </div>
          <div className="header_option ">
                <SupervisedUserCircleIcon fontSize='large'/>
          </div>
        </div>
        <div className="header_right">
          <div className="header_info">
            <Avatar src = {user.photoURL}/>
            <h4>{user.displayName}</h4>
          </div>
              <IconButton>
                < AddIcon/>
              </IconButton>
              <IconButton>
                <ForumIcon/>
              </IconButton>
            
              <IconButton>
                < NotificationsActiveIcon/>
              </IconButton>
              <IconButton>
                <ExpandMoreIcon/>
              </IconButton>`
        </div>
    </div>
  )
}

export default Header