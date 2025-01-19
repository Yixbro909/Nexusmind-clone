import React from 'react'
import Document from '../assets/Documents.png'
import Mic from '../assets/Mic.png'
import DarkSocialIcons from '../components/DarkSocialIcons'

const style = {
    // boxShdow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
}

const LilyPrompt = () => {
    return (<>
        <div className='w-full my-36 flex justify-center items-center p-5'>
            <div className='flex flex-col space-y-4 justify-center'>
                <div>
                    <h1 className="text-lg md:text-3xl font-semibold">Hello, How may i help you Today?</h1>
                </div>

                {/* Lily form prompt */}
                <form action="" className='w-full'>
                    <div className='flex space-x-4 rounded-xl  p-3 shadow-md'>
                        <button className='bg-none outline-none'>
                            <img src={Document} alt="attachments" className='w-[20px] h-[20px]' />
                        </button>
                        <input type="text" placeholder='Your message...' className='outline-none bg-none grow' />
                        <button className='bg-none outline-none'>
                            <img src={Mic} alt="mic" className='w-[20px] h-[20px]' />
                        </button>
                    </div>
                </form>

                <div className='md:text-lg'>Teams Privacy &#169; 2025 NexusMind All Reserved.</div>

                <DarkSocialIcons />
            </div>
        </div>
    </>
    )
}

export default LilyPrompt