import React from 'react'

const AvailableRoles = () => {
    return (
        <div className='md:mx-auto md:w-[600px] m-4 flex flex-col space-y-2 p-3 rounded-lg bg-[#F6F5F5] shadow-md'>
            <p className="font-bold">Available Roles Are:</p>
            <div className="flex flex-col space-y-1">
                <p>-Software Engineer</p>
                <p>-FullStack Developer</p>
                <p>-Machine Learning Engineer</p>
                <p>-AI Researcher</p>
                <p>-App Developer</p>
                <p>-Content Writer</p>
                <p>-Accountant</p>
                <p>-Product Designer</p>
                <p>-Data Science etc</p>
            </div>
        </div>
    )
}

export default AvailableRoles