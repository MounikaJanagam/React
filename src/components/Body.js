import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { REST_LIST_API } from "../utilities/constants.js";
import RestCard from "./RestaurantCard.js";
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
        const data = await  fetch(REST_LIST_API);
        const json = await data.json();
       // console.log(json, json?.data?.cards[2]?.data?.data?.cards);
       // Optional Chaining
       setsearchList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setAllRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setListofRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return allRest?.length==0 ? (<Shimmer/> ): (
        <>
        <div className="p-4 flex">
            <div >
                {/* Filter functionality */}
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                    const listofRests = allRest.filter(
                                (rest) => rest.info.avgRating > 4
                    );
                    setListofRest(listofRests);
                // console.log("button clicked", listofRest);
                    } }
                >Top Rated Restarunts
                </button>
            </div>
            <div>
            {/*search   functionality*/}
                <input className="border border-solid border-black" value={inputValue} placeholder="Enter"
                    onChange={
                        (e) =>{
                        setInputValue(e.target.value);
                    //  console.log(inputValue);
                        }
                    }
                />
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={
                    () =>{
                const searchListRest = allRest.filter(
                        (rest) =>{
                        return  rest.info.name.toLowerCase().includes(inputValue.toLowerCase());
                        }
                    );   
                    setsearchList(searchListRest);
                    }
                }>Search
                </button>
            </div>
        </div>
        <div className="flex flex-wrap">
                {searchList.map((rest) => (
                    <RestCard key={rest.info.id} resData={rest}></RestCard>
                ))}
            </div></>
    );
}

