import React from 'react'

const HowItWorks = () => {
    return (
        <div className="w-full mt-20">
            <div className='mx-auto flex flex-col space-x-3 justify-center items- md:w-[70%] p-5 my-5 text-gray-700'>
                <h1 className="p-5 text-2xl font-bold">How it Works</h1>
                <div className='flex flex-col space-y-3 p-5 rounded-lg shadow-md bg-gray-100 tracking-wide leading-normal '>
                    <div>
                        <p>Our simple and intuitive process makes it easy to get started with Lily</p>
                        <p><span>- Step 1:</span> Our team helps integrate the chatbot interface with the company's website</p>
                        <p><span>- Step 3:</span>Customers interact with the chatbot, receiving real-time answers to their queries</p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col space-y-2">
                        <p className="font-bold">Features</p>
                        <div>
                            <p> <span className="font-bold">- Feature 1:</span> Real-time answers to customer queries</p>
                        </div>
                        <p> <span className="font-bold">- Feature 2:</span> Database management and integration</p>
                    </div>

                    {/* Version 2 */}
                    <div className="flex flex-col space-y-2">
                        <p className="font-bold">Version 2</p>
                        <div>
                            <p>Coming soon: advanced features and capabilities</p>
                            <p> <span className="font-bold">Introduction:</span>  We're excited to announce that Version 2 of Lily is coming soon, with advanced features and capabilities that will take customer support to the next level.</p>
                        </div>
                        <p> <span className="font-bold">- Feature 1:</span> Agentic RAG Ai capabilities, allowing the chatbot to perform tasks such as ordering rides, food, and processing documents</p>
                        <p> <span className="font-bold">- Feature 2:</span> Enhanced natural language processing and machine learning algorithms</p>
                        <p> <span className="font-bold">- Feature 3:</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks