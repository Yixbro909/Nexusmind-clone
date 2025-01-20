import React from 'react'
import next from '../../assets/next.png'
import JoinTeam from '../../components/JoinTeam';
import AvailableRoles from '../../components/AvailableRoles';
import { Link } from 'react-router-dom';
import miriam from '../../assets/miriamicon.png';

const Precious = () => {
    return (
        <>
            <div className='mt-20 w-full flex flex-col justify-center items-center p-5 my-6'>
                <div className="flex flex-col md:w-[600px] space-y-3 p-3 bg-[#F6F5F5] rounded-md">
                    <h1 className='text-4xl self-start mb-5'>Team</h1>
                    <img src={miriam} className="w-[130px] h-[120px]" alt="picicon" />

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>Meet Precious David, Our CEO & Founder</p>
                        <p>Precious is a visionary leader and entrepreneur with a unique blend of skills in technology, marketing, business, and operations. As our CEO and Founder, he has been instrumental in driving the growth and success of NexusMind, and has played a key role in shaping the company's vision and strategy. With his expertise and leadership, Precious has built a team of talented individuals who share his passion for innovation and his commitment to excellence.</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>About Precious</p>
                        <p>Precious has a strong background in technology, with a deep understanding of software development, data science, and artificial intelligence. He has also developed a keen sense of marketing and business, with a proven track record of driving growth and revenue through innovative marketing strategies and partnerships. As a seasoned entrepreneur, Precious has a unique ability to balance the technical and business aspects of a company, ensuring that NexusMind stays focused on its mission and goals.</p>
                    </div>

                    {/* prev and next icon */}
                    <Link className='self-end' to="/team/miriam">
                        <img src={next} alt="nexticon" className='w-[40px] h-[40px]' />
                    </Link>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>Driving Lily Growth's</p>
                        <p>As the CEO and Founder of NexusMind, Precious has been the driving force behind Lily's growth and development. He has worked tirelessly to build a team of talented engineers, data scientists, and marketers who share his vision for the future of AI and technology. Under his leadership, NexusMind has secured a recognition, and has established itself as a leader in the AI and tech industry. Precious's leadership and vision have been instrumental in shaping Lily's product roadmap, and he continues to play a key role in driving the company's innovation and growth.</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>Skills and Expertise</p>
                        <p>-Technology: software development, data science, artificial intelligence, cloud computing</p>
                        <p>- Marketing: digital marketing, brand development, growth hacking</p>
                        <p>- Business: strategy, operations, finance, partnerships</p>
                        <p>- Leadership: team management, talent development, vision and strategy</p>
                    </div>
                </div>
            </div>

            <JoinTeam />
            <AvailableRoles />
        </>
    )
}

export default Precious