import React from 'react'
import Banner from '../../assets/subscribe/images.jpg'


const Bannering = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
}

function Subscribe() {
  return (
    <div className='mb-20 bg-gray-100 dark:bg-gray-800 text-white'
        data-aos='zoom-in'
        style={Bannering}
    >
        <div className='container backdrop-blur-sm py-10'>
            <div>
                <h1 className='text-2xl !text-center sm:text-left 
                    sm:text-4xl font-semibold'
                >
                    Get Notified About New Products
                </h1>
                <input 
                    data-aos='fade-up'
                    type='text'
                    placeholder='Enter Your Email'
                    className='w-full p-3 text-black'
                />
            </div>
        </div>
    </div>
  )
}

export default Subscribe