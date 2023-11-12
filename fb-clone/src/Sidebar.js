import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMore from '@mui/icons-material/ExpandMore'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useStateValue } from './StateProviders'

function Sidebar() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className='sidebar'>
        <SidebarRow src = {user.photoURL} title={user.displayName}/>
        <SidebarRow Icon ={LocalHospitalIcon}  title='Hospital Info'/>

        <SidebarRow Icon ={EmojiFlagsIcon} title='Pages'/>
        <SidebarRow Icon ={PeopleIcon} title='Friends'/>
        <SidebarRow Icon ={ChatIcon} title='Messager'/>
        <SidebarRow Icon ={StorefrontIcon} title='Marketplace'/>
        <SidebarRow Icon ={VideoLibraryIcon} title='Videos'/>
        <SidebarRow Icon ={ExpandMore} title='More'/>
    </div>
  )
}

export default Sidebar