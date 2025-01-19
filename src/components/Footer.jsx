import React from 'react'
import { Link } from 'react-router-dom'
import LightSocialIcons from './LightSocialIcons'

const Footer = () => {
    return (
        <div className="w-full flex flex-col mt-7 bg-[#5A5858] ">
            <div className='text-white text-md flex justify-evenly space-x-3 w-full p-5 '>
                <div className='flex flex-col space-y-3'>
                    <Link to='/aboutus'>About us</Link>
                    <Link to="/termsandcondition"> Terms & Condition</Link>
                    <Link to="/policyprivacy">Privacy </Link>
                    <Link>Lily Ads</Link>
                </div>
                <div className='flex flex-col space-y-3'>
                    <Link to="/blogs">Blog</Link>
                    <Link to="/howitworks">How it Works</Link>
                    <Link to="/contactus">Contact Us </Link>
                </div>

                <div className='flex flex-col space-y-3'>
                    <Link>Research</Link>
                    <Link>Partners</Link>
                    <Link to='/team/precious'> Team</Link>
                </div>
            </div>
            <div className="border-t-2 mt-5 p-5 text-white border-white">
                <div className="flex justify-center space-x-2">
                    <span className='text-sm'> Teams Privacy &#169; 2025 NexusMind All Reserved.</span>
                    <LightSocialIcons />
                </div>
            </div>
        </div >
    )
}

export default Footer