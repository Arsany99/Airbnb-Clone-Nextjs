'use client';
import React, { useState } from 'react';
import {SearchIcon, UserIcon} from '@heroicons/react/solid';
import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Link from 'next/link';
const SearchBar = ({placeholder} : {placeholder ?:string }) => {
  const [input , setInput] = useState('')
  const [startDate , setstartDate] = useState(new Date())
  const [endDate , setendDate] = useState(new Date())
  const [numOfGuests , setnumOfGuests] = useState(1)


  


  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  const handleSelect = (ranges : RangeKeyDict)=>{
    setstartDate(ranges.selection.startDate as Date ) 
    setendDate(ranges.selection.endDate as Date ) 



  }
  
  return (
    <>
        <div className='flex items-center  md:border-2 rounded-full py-2 md:shadow-sm'>
        <input type="text" 
        placeholder= {placeholder ||'start your search'}
        onChange={(e)=>setInput(e.target.value)}
        className='text-sm text-gray-600 flex-grow pl-5 bg-transparent outline-none'
        />
        <SearchIcon className='hidden md:inline-flex bg-red-400 h-8 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        
    </div>
    {input && (
      <div className ="absolute top-[100%]  left-[50%] translate-x-[-50%] flex flex-col col-span-3 mx-auto">
        <DateRangePicker  ranges={[selectionRange]}  onChange={handleSelect} rangeColors={['#FD5B61']} minDate={new Date()} />
        <div className="flex items-center border-b  bg-white p-4 ">
          <h2 className='text-2xl flex-grow font-semibold'>Number of guests</h2>
          <UserIcon className='h-5'/>
          <input type='number' 
          className='w-12 pl-2 text-lg outline-none text-red-400'
          value={numOfGuests}
          min={1}
          onChange={(e)=>setnumOfGuests(Number(e.target.value))}/>
        </div>
        <div className="flex items-center bg-white p-5">
          <button type='button'className='flex-grow text-gray-500'
          onClick={()=>setInput('')}>Cancel</button>
          <Link href={{pathname:'/Search' , search:`?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests.toString()}`}} onClick={()=>setInput('')} className='flex-grow text-red-400'> Search </Link>
        </div>
    </div>
    )}
    
    
    
    
    </>
  )
}

export default SearchBar