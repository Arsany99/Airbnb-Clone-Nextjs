export type ExploreItem = {
    img: string;
    location: string;
    distance: string; 
}

export type ExploreData = ExploreItem[];


export type LiveItem = {
    img: string;
    title: string;
}

export type LiveData = LiveItem[];


export type listiningCardItem = {
    img: string;
    title: string;
    location:string;
    description:string;
    star:number;
    price:string;
    total:string;
    long:number;
    lat:number;
}
export type searchResultDate = listiningCardItem[];
