import React from 'react'
import { Link } from 'react-router-dom'
import prev from '../../assets/prev.png'
import JoinTeam from '../../components/JoinTeam';
import AvailableRoles from '../../components/AvailableRoles';


const OtherTeams = () => {
    return (
        <>

            <div className='mt-20 w-full flex flex-col justify-center items-center p-5 my-6'>
                <h1 className='text-4xl text-center mb-5'>Team</h1>
                <div className="flex flex-col md:w-[600px] h-[300px] space-y-3 p-3 bg-[#F6F5F5] rounded-md">
                    <h1 className='text-2xl font-bold'>Other Team</h1>
                    <div className='flex flex-col space-y-2'>
                        <p>Anthony Achigbue: Product Manager</p>
                        <p>Adio Olakunle: Backend Developers</p>
                        <p>Rebecca Owolawase: Product Manager</p>
                        <p>Nosakhare Joseph: Product Manager</p>
                    </div>
                    {/* prev and next icon */}
                    <Link to="/team/obinna">
                        <img src={prev} alt="previcon" className='w-[40px] h-[40px] self-start' />
                    </Link>
                </div>
            </div>
            <JoinTeam />
            <AvailableRoles />
        </>
    )
}

export default OtherTeams