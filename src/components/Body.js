import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { REST_LIST_API } from "../utilities/constants.js";
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

