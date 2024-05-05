'use client'
import React, { useState } from 'react'
import MapGl , {Marker , Popup} from 'react-map-gl'
import { searchResultDate , listiningCardItem } from '../types/app'
import {getCenter } from 'geolib'
import 'mapbox-gl/dist/mapbox-gl.css'
import Image from 'next/image'

const Map = ({searchResultData} : {searchResultData:searchResultDate}) => {
    const [selectedLocation , setselectedLocation]  = useState <listiningCardItem | null>( null)
    const coordinates = searchResultData.map((listing)=>({
        longitude : listing.long,
        latitude : listing.lat
    }))
    console.log(coordinates , 'fffffffff');
    

    const center = getCenter(coordinates) as {
        longitude:number;
        latitude : number ;

    }
    const [viewport , setviewport] = useState({
        width : '100%',
        height : '100%',
        zoom : 11,
        longitude : center.longitude ,
        latitude : center.latitude ,
    })


    return <MapGl {...viewport} 
    mapStyle='mapbox://styles/mapbox/dark-v11'  
    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
    onMove={(nextViewPort)=> setviewport(prev =>{
        return {
            ...prev,
            longitude: nextViewPort.viewState.longitude,
            latitude: nextViewPort.viewState.latitude
        }
    })}>
        {searchResultData.map(listing => (
            <div key={listing.long}>
                <Marker longitude={listing.long} latitude={listing.lat}>
                    <div onClick={()=> setselectedLocation(listing)} className="animate-bounce">
                        <Image src='/mapmarker.png'
                        alt='map-marker'
                        width={24}
                        height={24}
                        />
                    </div>

                </Marker>
                {selectedLocation?.long === listing.long ? (
                                    <Popup 
                                        closeOnClick={false} 
                                        onClose={()=> setselectedLocation(null)} 
                                        latitude={listing.lat}
                                        longitude={listing.long}>
                                            {listing.title}
                                    </Popup>

                )

                : null}
                

            </div>
        ))}
    </MapGl>
}

export default Map