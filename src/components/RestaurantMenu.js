import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
const RestaruntMenu = () => {
    
    const { resId } = useParams();
    
    const resData = useRestaurantMenu(resId);
    
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