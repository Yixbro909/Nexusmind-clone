import React, { useState, useEffect, useRef } from 'react'
// import Document from '../assets/Documents.png'
// import Mic from '../assets/Mic.png'
import DarkSocialIcons from '../components/DarkSocialIcons'
import axios from 'axios'
import LilyChat from '../components/LilyChat.'
import Send from '../assets/send.svg';

const LilyPrompt = () => {
    const url = 'https://nexusmind-backend-clone.onrender.com/lilybot'

    const [value, setValue] = useState('');
    const [conversation, setConversation] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const inputRef = useRef()

    // const chats = [
    //     { you: "How are you doin today" },
    //     { lily: "im fine hows your day" },
    //     { you: "fine" },
    //     { lily: "How may i help you today" },
    //     { you: "Tell me more about todays weather" },

    // ]

    const chatbotRequest = async (text) => {
        setLoading(true)
        setError(null)

        try {
            if (value) {
                const response = await axios.post(url, { text })
                const data = await response.data
                setConversation((prev) => [...prev, { lily: data.chatbot }]);
            }
            setLoading(false)
        } catch (err) {
            setLoading(false)
            if (err.status === 500) {
                setError('Check your interrnet connection')
            } else {
                setError(`Opps, Sorry server error we'll repair it later...`)
            }
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        value && setConversation((prev) => [...prev, { you: value }]);
        chatbotRequest(value)

        inputRef.current.value = ''
        setValue('')
        inputRef.current.focus();
    }

    useEffect(() => {
        if (conversation.length > 5) {
            conversation.shift()
        }

    }, [conversation])


    return (<>
        <div className='w-full my-36 flex justify-center items-center p-5'>
            <div className='flex flex-col space-y-4 justify-center w-full md:w-[600px]'>
                <div>
                    <h1 className="text-3xl font-semibold">Hello, How may i help you Today?</h1>
                </div>

                {/*Display Lily's Chat  */}
                <LilyChat conversation={conversation} loading={loading} error={error} />

                {/* Lily form prompt */}
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex space-x-4 rounded-xl  p-3 px-5 shadow-md'>
                        {/* <button className='bg-none outline-none'>
                            <img src={Document} alt="attachments" className='w-[20px] h-[20px]' />
                        </button> */}
                        <input type="text" ref={inputRef} onChange={(e) => setValue(e.target.value)} placeholder='Your message...' className='outline-none bg-none grow' />
                        <button type='submit' className='bg-none outline-none self-center'>
                            <img src={Send} alt="send icon" className='w-[20px] h-[20px]' />
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