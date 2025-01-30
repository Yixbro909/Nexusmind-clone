import React from 'react'
import LoadingDots from '../components/LoadingDots';

const LilyChat = ({ conversation, loading, error }) => {

    return (
        <div className='w-full flex flex-col space-y-3'>
            {conversation.length > 0 && conversation.map((chat, index) => {
                if (chat.you) {

                    return (<div className='flex flex-col self-end' key={index}>
                        <cite className="text-gray-600 text-sm self-end">You</cite>
                        <div className='bg-pink-200 p-2 rounded-lg'>{chat.you}</div>
                    </div>)
                }


                return (<div className='flex flex-col space self-start' key={index}>
                    <cite className="text-green-600 text-sm">Lily</cite>
                    <div className='bg-gray-300 p-2 rounded-lg'>{chat.lily}</div>
                </div>)

            })}

            {loading && (<div className='flex flex-col space self-start'>
                <cite className="text-green-600 text-sm mb-3">Lily</cite>
                <LoadingDots />
            </div>)}

            {error && (<div className='flex flex-col space self-start'>
                <cite className="text-green-600 text-sm mb-1">Lily</cite>
                <div className='bg-red-300 text-sm p-2 rounded-lg text-gray-700'>{error}</div>
            </div>)}

        </div>
    )
}

export default LilyChat