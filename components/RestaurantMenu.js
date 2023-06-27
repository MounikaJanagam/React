import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaruntMenu = () => {
    useEffect(() => {
        fetchRestaurantDetails();
    }, []); 
    const { resId } = useParams();
   const [resData, setResData] = useState(null);
    async function fetchRestaurantDetails(){
        const apidata = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
        +resId);
        const json = await apidata.json();
       console.log(json);
        setResData(json.data);
    }
    console.log(resData);
    if(resData == null) return <Shimmer/>;

    const {
        name,
        cuisines,
        costForTwoMessage
    } = resData?.cards[0]?.card?.card?.info;
    const {itemCards} = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
    <div className="menu">
        <h1>{name}</h1>
        <p>
            {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => ( 
            <li key={item.card.info.id}>
                {item.card.info.name} -{" Rs."}
                {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
            ))}
        </ul>
    </div>
    );
}
export default RestaruntMenu;