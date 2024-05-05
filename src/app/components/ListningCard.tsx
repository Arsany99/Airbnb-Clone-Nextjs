import React from 'react'
import { listiningCardItem } from '../types/app'
import Image from 'next/image'
import { HeartIcon} from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
type listiningCardProps = Omit <listiningCardItem, 'long' |'lat'>

const ListningCard = ({ img , description , total ,  star , title , price , location } : listiningCardProps) => {
  return (
    <div className='flex py-2 px-2 border-b cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image src={img}
            fill
            className='rounded-2xl object-cover'
            alt='listingCard'/>
        </div>
        <div className="flex flex-col  flex-grow pl-5">
            <div className="flex justify-between p-5">
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer' />
            </div>
            <h4 className='text-2xl'>
                {title}
            </h4>
            <div className="border-b  pt-2">
                <p className='pt-2 text-sm inline-block text-gray-500 flex-grow' >
                    {description}
                </p> 
                <div className="flex justify-between items-end pt-5">
                    <p className='flex items-center' >
                        <StarIcon className='h-5 text-red-400'/>
                        {star}
                    </p>
                </div>
                <div>
                    <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>

                </div>
            </div>
        </div>




    </div>
  )
}

export default ListningCard