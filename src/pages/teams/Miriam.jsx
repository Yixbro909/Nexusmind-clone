import React from 'react'
import { Link } from 'react-router-dom';
import miriamicon from '../../assets/miriamicon.png';
import next from '../../assets/next.png'
import prev from '../../assets/prev.png';
import AvailableRoles from '../../components/AvailableRoles';
import JoinTeam from '../../components/JoinTeam';

const Miriam = () => {
    return (
        <>
            <div className='mt-20 w-full flex flex-col justify-center items-center p-5 my-6'>
                <h1 className='text-4xl self-start mb-5'>Team</h1>
                <div className="flex flex-col md:w-[600px] space-y-3 p-3 bg-[#F6F5F5] rounded-md">
                    <img src={miriamicon} className="w-[130px] h-[120px]" alt="picicon" />

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>Meet Miriam Odeyiany, Our Chief Data Scientist & Co-Founder</p>
                        <p>Miriam is a brilliant mind and a key architect of NexusMind's innovative solutions. As our Chief Data Scientist and Co-Founder, she brings her expertise in machine learning and data science to drive the development of Lily's intelligent core. Currently, a 300-level student of accounting  at the University of Lagos, Miriam is a shining example of talent, dedication, and passion for innovation.</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>About Miriam</p>
                        <p>With a strong foundation in machine learning and data science, Miriam has been instrumental in shaping the intelligence behind Lily. Her expertise has enabled us to create a cutting-edge solution that is poised to revolutionize the way we interact with technology. As a Co-Founder of NexusMind, Miriam is committed to harnessing the power of data science and machine learning to drive positive change and improve lives.</p>
                    </div>

                    {/* prev and next icon */}
                    <div className='flex justify-between'>
                        <Link to="/team/precious">
                            <img src={prev} alt="nexticon" className='w-[40px] h-[40px] ' />
                        </Link>
                        <Link to="/team/obinna">
                            <img src={next} alt="nexticon" className='w-[40px] h-[40px] ' />
                        </Link>

                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>What Drives Miriam</p>
                        <p>Miriam's passion for innovation and problem-solving is evident in her work. She is driven by a desire to use technology to make a meaningful impact on society. With her exceptional skills and dedication, Miriam is an invaluable asset to the NexusMind team, and we are excited to see the impact she will continue to make in the world of data science and machine learning.</p>
                    </div>

                </div>
            </div>
            <JoinTeam />
            <AvailableRoles />
        </>
    )
}

export default Miriam