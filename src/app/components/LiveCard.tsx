import React from 'react'
import { LiveItem } from '../types/app'
import Image from 'next/image'

type liveCardProps = LiveItem

const LiveCard = ({img , title} : liveCardProps) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className="relative h-80 w-80">
            <Image src={img} alt='LiveCard-Img' fill/>
        </div>
        <h3 className='text-2xl mt-3'>
            {title}
        </h3>
    </div>
  )
}

export default LiveCard