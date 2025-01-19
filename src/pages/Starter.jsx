import React from 'react'
import { Link } from 'react-router-dom'

const Starter = () => {
    return (
        <div className="w-full  mt-16">
            <div className="mx-auto md:w-[500px] flex flex-col p-5 space-y-4">
                <h1 className="text-4xl">Intelligent solutions for a secure tomorrow</h1>
                <div className="p-5 flex flex-col space-5 justify-evenly items-center shadow-lg h-[200px] bg-gray-100 rounded-lg">
                    <p>Meet Lily our most intelligent Ai model is now available</p>
                    {/* <button className='p-2 bg-[#707E7C] rounded-md self-stretch text-white'> */}
                    <Link className='p-2 text-center bg-[#707E7C] rounded-md self-stretch text-white' to="/lily">Talk to Lily</Link>
                    {/* </button> */}
                </div>
            </div>
        </div>
    )
}

export default Starter