import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import React from 'react'

// icons 
import { FaRegHeart, FaPodcast, FaMusic, FaClock } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiTimer2Fill, RiUploadLine, RiHeadphoneLine } from "react-icons/ri";
import logo from "../../assets/Logo.png"
// css
import "./SideBar.css"

export default function SideBar() {

    return (
        
            <Sidebar backgroundColor="#242424" width='100%'>
                <div className="logotext">
                    <img src={logo} alt="Logo" width={100} />
                    <h1>AudioBook</h1>
                </div>
                <Menu>
                    <MenuItem icon={<FiHome />}>Home</MenuItem>
                    <MenuItem icon={<FaMusic />}>Library</MenuItem>
                    <MenuItem icon={<FaPodcast />}>Artist</MenuItem>
                    <MenuItem icon={<FaClock />} >Recently Played</MenuItem>
                    <MenuItem icon={<FaRegHeart />}>Liked Songs</MenuItem>
                    <MenuItem icon={<RiUploadLine />}>Upload</MenuItem>
                </Menu>
            </Sidebar>
    )
}


