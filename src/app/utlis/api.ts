export const getExplor = async ()=>{
    try{
        //console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`)
        const exploreData = await res.json();
        return exploreData ;

    }catch (err){
        console.log(err);
        

    }
};


export const getLive = async ()=>{
    try{
        console.log("Base :", process.env.NEXT_PUBLIC_BASE_URL);
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`)
        const liveData = await res.json();
        return liveData ;

    }catch (err){
        console.log(err);
        

    }
}



export const getSearchResult = async ()=>{
    try{
        console.log("Base :", process.env.NEXT_PUBLIC_BASE_URL);
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`)
        const searchResultDate = await res.json();
        return searchResultDate ;

    }catch (err){
        console.log(err);
        

    }
}

