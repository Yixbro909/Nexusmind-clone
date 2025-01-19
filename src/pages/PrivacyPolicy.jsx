import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    return (
        <div className="w-full mt-20">
            <div className='mx-auto flex flex-col space-x-3 justify-center items- md:w-[70%] p-5 my-5 text-gray-700'>
                <h1 className="p-5 text-2xl font-bold">Lily Privacy Policy</h1>
                <div className='flex flex-col space-y-3 p-5 rounded-lg shadow-md bg-gray-100 tracking-wide leading-normal '>
                    <div>
                        <div className="flex flex-col space-y-3">
                            <p>Effective Date: January 1, 2025</p>
                            <p>At Lily, we are committed to protecting the privacy and security of our customers' data. This Privacy Policy explains how we collect, use, and protect your data when you use the Lily Platform.</p>
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="flex flex-col space-y-2">
                        <p className='font-bold'>1. Introduction</p>
                        <div>
                            <p>1.1. This Privacy Policy applies to all customers who use the Lily Platform, including the website, dashboard, and chatbot interface.</p>
                            <p>1.2. By using the Lily Platform, you agree to be bound by this Privacy Policy.</p>
                        </div>

                    </div>

                    {/*  Data Collection */}
                    <div className="flex flex-col space-y-2">
                        <p className="font-bold">2. Data Collection</p>
                        <div>
                            <p>2.1. We collect data from you when you use the Lily Platform, including:</p>
                            <p>* Contact information, such as your name, email address, and phone number</p>
                            <p>* Customer Data, such as text, images, and other materials, that you upload or transmit to the Lily Platform</p>
                            <p>* Usage data, such as your interactions with the chatbot and your use of the dashboard</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy