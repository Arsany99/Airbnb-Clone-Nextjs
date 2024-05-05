import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const Links =[{
        title :'About' ,
        Links : [
            'How Airbnb Works',
            'Newsroom',
            'Investors',
            'Airbnb PLus',
            'Airbnb Luxe '
        ]
    },{
        title :'Community' ,
        Links : [
            'Accessbility',
            'THIS IS NOT Real Site',
            'Its a Pretty Awesome Clone',
            'Referrals',
            'Papafam'
        ]
    },{
        title :'Host' ,
        Links : [
            'Papa React',
            'Preesents',
            'Zero To FuLL Stack Here',
            'Hundred of Student',
            'Join now'
        ]
    },{
        title :'Support' ,
        Links : [
            'Papa React',
            'THIS IS NOT Real Site',
            'Its a Pretty Awesome Clone',
            'Referrals',
            'Accessbility'
        ]
    }
]
  return (
    <footer className='container'>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200">
            {Links.map((link) =>(
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className='font-bold'>{link.title}</h5>
                    {link.Links.map((item)=>(
                        <Link href={item} className='block' key={item}>{item}
                        </Link>
                    ))}
                </div>

            ))}
           
        </div>
    </footer>
  )
}

export default Footer