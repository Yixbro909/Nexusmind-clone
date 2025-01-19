import React from 'react'

const AboutUs = () => {
  return (
    <div className="w-full mt-16">
      <div className='mx-auto flex flex-col space-x-3 justify-center items- md:w-[70%] p-5 my-5 text-gray-700'>
        <h1 className="p-5 text-2xl font-bold">About Us</h1>
        <p className='p-5 rounded-lg shadow-md bg-gray-100 tracking-wide leading-normal '>
          NexusMind is an AI startup revolutionizing different industries by deploying solutions to various industries.

          Our flagship product is Lily, Lily is a next-generation RAG (Retrieval-Augmented Generation) chatbot designed to revolutionize how businesses and their customers interact.

          This dual-purpose solution includes; a dashboard for companies to upload, manage, and analyze their database and a chatbot interface, seamlessly integrated into the companies' websites, which accesses the dashboard to provide real-time answers and execute tasks for customers. Lily is designed to evolve into an agentic assistant, capable of performing complex tasks such as ordering food, booking rides, processing documents, managing financial transactions, and reporting cases, all from the comfort of users’ homes.
        </p>
      </div>
    </div>
  )
}

export default AboutUs