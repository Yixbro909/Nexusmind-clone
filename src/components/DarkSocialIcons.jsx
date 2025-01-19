import React from 'react'
import { Link } from 'react-router-dom'
import fb1 from '../assets/fb1.png'
import instagram1 from '../assets/instagram1.png'
import youtube1 from '../assets/youtube1.png'
import x1 from '../assets/x1.png'

const DarkSocialIcons = () => {
    return (
        <div className="flex space-x-2">
            <Link>
                <img src={instagram1} alt="" className="w-[20px] h-[20px]" />
            </Link>
            <Link>
                <img src={youtube1} alt="" className="w-[20px] h-[20px]" />
            </Link>
            <Link>
                <img src={fb1} alt="" className="w-[20px] h-[20px]" />
            </Link>
            <Link>
                <img src={x1} alt="" className="w-[20px] h-[20px]" />

            </Link>
        </div>
    )
}

export default DarkSocialIcons