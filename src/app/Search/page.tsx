import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { format } from 'date-fns';
import { getSearchResult } from '../utlis/api';
import { searchResultDate } from '../types/app';
import ListningCard from '../components/ListningCard';
import Map from '../components/Map';

type searchParams = {
    startDate:string,
    endDate:string,
    numOfGuests:string,
    location : string
}

const SearchResult = async ({searchParams:{location ,startDate , endDate , numOfGuests}}:{searchParams:searchParams}) => {
    let formatedStartDate;
    let formatedEndDate ;
    
    if (startDate && endDate) {
        formatedStartDate = format(new Date(startDate) , 'dd MMMM yy')
        formatedEndDate = format(new Date(endDate) , 'dd MMMM yy')        
        

    }
    console.log(numOfGuests);
    const filters =[
        'cancellation flexibility',
        'type of place',
        'price',
        'rooms and beds',
        'more filters'
    ]
    
    const searchResultDate : searchResultDate = await getSearchResult()
    console.log(searchResultDate);
    
    
    
    const range = `${formatedStartDate} - ${formatedEndDate}`
    return (
    <>
    <Header placeholder={`${location} | ${range} | ${numOfGuests}`}/>
    <main>
        <section>
            <div className="container flex ">
                <div className="pt-14 pr-4">
                    <p className='text-xs'>
                        300+ stays - {range}-for {numOfGuests} guests
                    </p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>
                        stays in {location}
                    </h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        {filters.map((filter)=>(
                            <button type='button' className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out' key={filter}>
                                {filter}
                            </button>
                        ))}
                    </div>
                    <div>
                    {searchResultDate.map(listing=>(
                        <ListningCard key={listing.title} img={listing.img}
                        title ={listing.title}
                        total={listing.total}
                        star = {listing.star}
                        description = { listing.description}
                        price = {listing.price}
                        location = {listing.location}
                        //lat = {listing.lat}
                        //long = {listing.long}
                        />
                    ))}

                    </div>
                </div>
                <div className='hidden   xl:inline-flex xl:min-w-[40%]'>
                    <Map searchResultData = {searchResultDate}/>
                </div>
            </div>

        </section>

    </main>
    <Footer/>
    
    
    </>
  )
}

export default SearchResult