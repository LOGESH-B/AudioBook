import React from 'react'
import "./Home.css"
import SideBar from '../../SideBar/SideBar'
import PlayControls from '../../PlayControls/PlayControls'


export default function Home() {
    return (
        <div>
            <div className='SideBar'>
                <SideBar />
            </div>
            <div className='PlayControls'>
                <div className='Controls'>
                    <PlayControls />
                </div>
            </div>
        </div>
    )
}
