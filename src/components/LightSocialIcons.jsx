import React from 'react'
import { Link } from 'react-router-dom'
import fb2 from '../assets/fb2.png'
import instagram2 from '../assets/instagram2.png'
import youtube2 from '../assets/youtube2.png'
import x2 from '../assets/x2.png'

const LightSocialIcons = () => {
    return (
        <div className="flex shrink-0 space-x-2">
            <Link>
                <img src={instagram2} alt="" className="w-[20px] h-[20px]" />
            </Link>
            <Link>
                <img src={youtube2} alt="" className="w-[20px] h-[20px]" />
            </Link>
            <Link>
                <img src={fb2} alt="" className="w-[20px] h-[20px]" />
            </Link>
            <Link>
                <img src={x2} alt="" className="w-[20px] h-[20px] " />

            </Link>
        </div>
    )
}

export default LightSocialIcons