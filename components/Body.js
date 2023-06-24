import dataobj from "../utilities/mockData";
import { Rest_Logo } from "../utilities/constants";
import { useState } from "react";

export const RestList = () => {
    let [listofRest, setListofRest] = useState(dataobj);    // this is for filtering toprated restaurants we should pass this listofRest in RestCard component at line 42 to get top rated restaurants
    let [inputValue, setInputValue] = useState();
    let [searchList, setsearchList] = useState(dataobj);    // this is for searching  restaurants we should pass this searchList in RestCard component at line 42 to get the search restaurants
    return (
        <>
        <div className="filters">
            {/* Filter functionality */}
            <button className="filter-btn" onClick={() => {
                listofRest = listofRest.filter(
                            (rest) => rest.data.avgRating > 4
                );
                setListofRest(listofRest);
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
                searchList = searchList.filter(
                    (rest) =>{
                      return  rest.data.name.includes(inputValue);
                    }
                 );   
                 setsearchList(searchList);
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
