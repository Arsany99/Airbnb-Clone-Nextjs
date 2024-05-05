import { LiveData } from '../types/app';
import { getLive } from '../utlis/api'
import React from 'react'
import LiveCard from './LiveCard';

const Live = async () => {
    const liveData : LiveData = await getLive()
    console.log('liiiiive ' ,liveData);
    
  return (
    <section className='pt-6'>
        <div className="container">
          <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -m-3">
            {liveData.map((item)=>(
                <LiveCard key={item.img} img={item.img} title={item.title}/>
              ))}
          </div>
        </div>

    </section>
  )
}

export default Live