import { Rest_Logo } from "../utilities/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

export const RestList = () => {
    const [listofRest, setListofRest] = useState([]);    // this is for filtering toprated restaurants we should pass this listofRest in RestCard component at line 42 to get top rated restaurants
    const [inputValue, setInputValue] = useState("");
    const [searchList, setsearchList] = useState([]);    // this is for searching  restaurants we should pass this searchList in RestCard component at line 42 to get the search restaurants
    const [allRest, setAllRest] = useState([]);
    
    // empty dependency array => once after render
    // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
    useEffect(()=>{
        getRestarunats();
      },[]

    );
    async function getRestarunats(){
        const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json, json?.data?.cards[2]?.data?.data?.cards);
       // Optional Chaining
       setsearchList(json?.data?.cards[2]?.data?.data?.cards);
       setAllRest(json?.data?.cards[2]?.data?.data?.cards);
       setListofRest(json?.data?.cards[2]?.data?.data?.cards);
    }
    return allRest?.length==0 ? (<Shimmer/> ): (
        <>
        <div className="filters">
            {/* Filter functionality */}
            <button className="filter-btn" onClick={() => {
                const listofRests = allRest.filter(
                            (rest) => rest.data.avgRating > 4
                );
                setListofRest(listofRests);
            // console.log("button clicked", listofRest);
                } }
            >Top Rated Restarunts
            </button>

            {/*search   functionality*/}
            <input className="input-value" value={inputValue} placeholder="Enter"
                onChange={
                    (e) =>{
                     setInputValue(e.target.value);
                   //  console.log(inputValue);
                    }
                }
            />
            <button className="search-btn" onClick={
                () =>{
               const searchListRest = allRest.filter(
                    (rest) =>{
                      return  rest.data.name.toLowerCase().includes(inputValue.toLowerCase());
                    }
                 );   
                 setsearchList(searchListRest);
                }
            }>Search
            </button>
        </div>
        <div className="res-list">
                {searchList.map((rest) => (
                    <RestCard key={rest.data.id} resData={rest}></RestCard>
                ))}
            </div></>
    );
}
const RestCard = (props) => {
   // console.log(props.resData);
    const {cloudinaryImageId,
        name,
        cuisines,
        area,
        locality,
        avgRating
    
    } = props.resData?.data;
    return (
        <div className="res-card">
            <img alt="itemLogo" className="itemLogo" src={Rest_Logo
            +cloudinaryImageId}></img>
             <h3>{name}</h3>
             <h4>{cuisines.join(",")}</h4>
             <h4>{locality+","+area}</h4>
             <h4>{avgRating} Rating</h4>
        </div>
    );
}
