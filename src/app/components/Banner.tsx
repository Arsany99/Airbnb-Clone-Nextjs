import Image from 'next/image'
import React from 'react'
import img from '../assets/pexels-pixabay-258154.jpg';
const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px]  lg:h[500px] xl:h-[500px]'>
        <Image src={img}
        alt='Banner-img'
        className='object-cover object-left'
        fill
        />
        <div className="absolute top-1/2 w-full text-center">
          <p className='text-sm sm:text-lg'>
            not sure where to go? perfect
          </p>
          <button type='button' className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold'>
            iam flexible
          </button>
        </div>
    </div>
  )
}

export default Banner