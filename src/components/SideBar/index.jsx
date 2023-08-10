import React from 'react'

// import Game from '../../assets/Game-two.png';
// import Like from '../../assets/Like.png';
// import Setting from '../../assets/Setting.png';
// import Puzzle from '../../assets/Puzzle.png';

import './style.css'
import { useThemeContext } from '../../contexts/ThemeContext'
import { THEMES } from '../../constants/theme';
import { Link } from 'react-router-dom';
import { PATHS } from '../../router/paths';

const SideBar = () => {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <aside className='vertical-aside__container'>
            <div className='vertical-aside'>
                <div className='top-icons'>
                    <img src={`/images/${theme}Icons/control.png`} alt='control' />
                </div>
                <div className='middle_icons'>
                    <img src={`/images/${theme}Icons/fav.png`} alt='control' />
                    <Link to={`${PATHS.USERS}`}>
                    <img src={`/images/${theme}Icons/setting.png`} alt='control' />
                    </Link>
                    <img src={`/images/${theme}Icons/puzzle.png`} alt='control' />
                </div>
                <div className={`theme_toggle theme_toggle_${theme}`}>
                    <img 
                        src={`/images/${theme}Icons/moon.png`} 
                        alt='moon' 
                        onClick={()=>{
                            theme === THEMES.LIGHT &&  toggleTheme()
                        }}
                        />
                    <img 
                        src={`/images/${theme}Icons/sun.png`}
                        alt='control' 
                        onClick={() => { 
                            theme === THEMES.DARK && toggleTheme()
                        }} 
                        />
                </div>
            </div>
            <div className={`sidebar__${theme}`}></div>
        </aside>
    )
  }

export default SideBar
// import React from 'react'

// import Game from '../../assets/Game-two.png';
// import Like from '../../assets/Like.png';
// import Setting from '../../assets/Setting.png';
// import Puzzle from '../../assets/Puzzle.png';

// import './style.css'

// const SideBar = () => {
//     return (
//     <aside className="sidebar">
//         <div className='icons'>
//             <img src={Game} alt='logo3'/>
//             <div>
//             <img src={Like} alt='hareticon'/>
//             <img src={Setting} alt='settings'/>
//             <img src={Puzzle} alt='Puzzle'/>
//             </div>
//         </div>
//         <div className='side__border'></div>
        
//     </aside>
//     )
//   }

// export default SideBar