import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type GreatestOutProps = {
    img: string,
    description: string ,
    linkText: string, 
    title : string

}
const GreatestOut = ({img , description , linkText , title}  :GreatestOutProps ) => {
  return (
    <div className='container relative'>
        <div className="relative h-96 min-w-[300px]">
            <Image src={img} fill className='rounded-2xl -z-10 object-cover' alt='GreatestOutdoor-img'/>
        </div>
        <div className="absolute top-32 left-32">
            <h3 className='text-4xl mb-3 w-64'>{title}</h3>
            <p>{description}</p> 
            <Link href='/' className='text-sm py-2 px-7  block w-fit rounded-lg mt-5 text-white bg-gray-900'>
                {linkText}
            </Link>
        </div>




    </div>
  )
}

export default GreatestOut