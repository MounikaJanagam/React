import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import MenuAccordian from "./MenuAccordian";
const RestaruntMenu = () => {
    
    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    const [prevIndex, setPrevIndex] = useState(null);

   // console.log(resData);
    if(resData == null) return <Shimmer/>;

    const {
        name,
        cuisines,
        costForTwoMessage
    } = resData?.cards[0]?.card?.card?.info;
    const categories = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
    );
    return (
    <div className="text-center pt-4">
        <h1 className="font-bold">{name}</h1>
        {categories.map((cat, index)=>(
            <MenuAccordian key={cat?.card?.card.title} data={cat?.card?.card} 
            showItems={index===showIndex ? true : false} 
            setShowIndex={()=>{
               // console.log("PrevInd::",prevIndex);
                prevIndex!=index ? setShowIndex(index) : setShowIndex(null); 
                setPrevIndex(index);   // to close the  same menuAccordian(keep track of prev menu index)
                
                //console.log("PrevInd::",prevIndex, index, showIndex);
            }} />
        ))}
    </div>
    );
}
export default RestaruntMenu;