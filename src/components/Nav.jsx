import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import menuIcon from '/assets/Menuicon.png'
// import MenuIcon from '../assets/Menuicon.png'
import nexusmindicon from '../assets/NexusmindLogo.png';

import SlideNavbar from './SlideNavbar'
const Nav = () => {
    const { pathname } = useLocation()


    return (
        <nav className='w-full flex items-center justify-between p-2 px-5 fixed top-0 lef-0  bg-white'>
            <Link to="/">
                {pathname == '/lily' ? <div className='text-green-600 text-2xl'>Lily</div> : <img src={nexusmindicon} alt="logo" className='w-[130px]' />}

            </Link>

            <SlideNavbar />
            {/* <div>
                <img src={MenuIcon} className="w-[20px] h-[20px]" alt="img" />
            </div> */}
        </nav>
    )
}

export default Nav