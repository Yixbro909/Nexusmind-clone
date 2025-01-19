import React from 'react'
import obinnaicon from '../../assets/obinnaicon.png';
import next from '../../assets/next.png'
import prev from '../../assets/prev.png'
import { Link } from 'react-router-dom';
import JoinTeam from '../../components/JoinTeam';
import AvailableRoles from '../../components/AvailableRoles';


const Obinna = () => {
    return (
        <>
            <div className='mt-20 w-full flex flex-col justify-center items-center p-5 my-6'>
                <h1 className='text-4xl self-start mb-5'>Team</h1>
                <div className="flex flex-col md:w-[600px] space-y-3 p-3 bg-[#F6F5F5] rounded-md">
                    <img src={obinnaicon} className="w-[130px] h-[120px]" alt="picicon" />

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>Meet Obinna Ekesi, Our VP of Artificial Intelligence and Co-Founder</p>
                        <p>Obinna is a renowned expert in the field of artificial intelligence, with a strong background in machine learning and data science. As our VP of Artificial Intelligence, he plays a crucial role in shaping the cognitive abilities of Lily, our cutting-edge AI solution. With his expertise, we're able to enhance Lily's capabilities, enabling her to learn, adapt, and interact with users in a more intuitive and effective way.</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>About Obinna</p>
                        <p>With a deep understanding of machine learning and data science, Obinna has developed a unique ability to design and implement AI solutions that drive real-world impact. His expertise spans a range of areas, including natural language processing, computer vision, and predictive modeling. At NexusMind, Obinna is responsible for leading the development of Lily's AI capabilities, ensuring that our solution stays at the forefront of innovation and delivers exceptional value to our users.</p>
                    </div>

                    {/* prev and next icon */}
                    <div className='flex justify-between'>
                        <Link to="/team/miriam">
                            <img src={prev} alt="previcon" className='w-[40px] h-[40px] ' />
                        </Link>
                        <Link to="/team/david">
                            <img src={next} alt="nexticon" className='w-[40px] h-[40px] ' />
                        </Link>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>Enhance Lily's Cognitive Abilities</p>
                        <p>Obinna's work is focused on enhancing Lily's cognitive abilities, enabling her to better understand and respond to user needs. By leveraging advanced machine learning techniques and data science methodologies, Obinna is able to improve Lily's language understanding, sentiment analysis, and decision-making capabilities. His goal is to create a solution that is not only intelligent but also intuitive, empathetic, and user-friendly</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>What Drives Obinna</p>
                        <p>Obinna is driven by a passion for innovation and a desire to use AI to make a positive impact on society. He believes that AI has the potential to transform industries and improve lives, and he's committed to playing a role in shaping this future. With his exceptional skills and experience, Obinna is an invaluable asset to the NexusMind team, and we're excited to see the impact he will continue to make in the world of AI and machine learning.</p>
                    </div>
                </div>
            </div>
            <JoinTeam />
            <AvailableRoles />
        </>
    )
}

export default Obinna