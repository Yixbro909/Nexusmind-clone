import React from 'react'
import { Link } from 'react-router-dom';
import davidicon from '../../assets/davidicon.png';
import next from '../../assets/next.png'
import prev from '../../assets/prev.png'
import JoinTeam from '../../components/JoinTeam';
import AvailableRoles from '../../components/AvailableRoles';

const Precious = () => {
    return (
        <>
            <div className='mt-20 w-full flex flex-col justify-center items-center p-5 my-6'>
                <h1 className='text-4xl self-start mb-5'>Team</h1>
                <div className="flex flex-col md:w-[600px] space-y-3 p-3 bg-[#F6F5F5] rounded-md">
                    <img src={davidicon} className="w-[130px] h-[120px]" alt="picicon" />

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>Meet David Uwagbale, Our CTO & Co-Founder</p>
                        <p>David is a highly skilled and seasoned software developer with a passion for building scalable and efficient technology solutions. As our CTO and Co-Founder, he is the technical mastermind behind Lily's infrastructure, responsible for designing and implementing the architecture that powers our innovative AI solution. With his expertise in both frontend and backend development, David has played a crucial role in shaping the technical vision of NexusMind and bringing Lily to life.</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>About David</p>
                        <p>David's technical expertise spans a wide range of areas, including software development, cloud computing, and cybersecurity. He’s a student of federal university of technology Akure, He has a deep understanding of the latest technologies and trends, and is always looking for ways to leverage them to drive innovation and improvement. As a seasoned developer, David has a unique ability to balance technical complexity with user-centric design, ensuring that Lily is both powerful and intuitive.</p>
                    </div>

                    {/* prev and next icon */}
                    <div className='flex justify-between'>
                        <Link to="/team/obinna">
                            <img src={prev} alt="previcon" className='w-[40px] h-[40px] ' />
                        </Link>
                        <Link to="/team/others">
                            <img src={next} alt="nexticon" className='w-[40px] h-[40px] ' />
                        </Link>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>Technical Mastermind Behind Lily</p>
                        <p>David's work on Lily's infrastructure has been instrumental in enabling the solution to scale and perform at high levels. He has designed and implemented a robust and secure architecture that supports Lily's advanced AI capabilities, and has worked closely with the development team to ensure seamless integration with the solution's frontend and backend components. David's technical expertise has been essential in overcoming complex challenges and ensuring that Lily meets the highest standards of quality and reliability.</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>What Drives David</p>
                        <p>David is driven by a passion for technology and a desire to use his skills to make a positive impact on society. He believes that technology has the power to transform industries and improve lives, and he's committed to playing a role in shaping this future. As a Co-Founder of NexusMind, David is dedicated to building a company that is driven by innovation, collaboration, and a commitment to excellence.</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>Expertise</p>
                        <p className='mb-2'>David is driven by a passion for technology and a desire to use his skills to make a positive impact on society. He believes that technology has the power to transform industries and improve lives, and he's committed to playing a role in shaping this future. As a Co-Founder of NexusMind, David is dedicated to building a company that is driven by innovation, collaboration, and a commitment to excellence</p>
                        <p>- Software development (frontend and backend)</p>
                        <p>- Cloud computing (AWS, Azure, Google Cloud)</p>
                        <p>- Cybersecurity (security architecture, threat modeling, penetration testing)</p>
                        <p>- Technical leadership and team management</p>
                        <p>- Agile development methodologies (Scrum, Kanban)</p>
                    </div>
                </div>
            </div>
            <JoinTeam />
            <AvailableRoles />
        </>
    )
}

export default Precious