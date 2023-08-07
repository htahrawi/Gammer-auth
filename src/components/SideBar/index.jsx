import React from 'react'

import Game from '../../assets/Game-two.png';
import Like from '../../assets/Like.png';
import Setting from '../../assets/Setting.png';
import Puzzle from '../../assets/Puzzle.png';

import './style.css'

const SideBar = () => {
    return (
    <aside className="sidebar">
        <div className='icons'>
            <img src={Game} alt='logo3'/>
            <div>
            <img src={Like} alt='hareticon'/>
            <img src={Setting} alt='settings'/>
            <img src={Puzzle} alt='Puzzle'/>
            </div>
        </div>
        <div className='side__border'></div>
    </aside>
    )
  }

export default SideBar