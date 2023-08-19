import { Rest_Logo } from "../utilities/constants";

const ItemList = ({itemCards})=> {
 return (
    <div>
    {itemCards.map( (item)=>(
        <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">
            <div className="w-9/12">
                <div>
                    <span className="">{item?.card?.info?.name}</span>
                    <span>₹{item?.card?.info?.price ? 
                    item?.card?.info?.price : item?.card?.info?.defaultPrice/100 }</span>
                </div>
                <div>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
            </div>
            <div className="w-3/12 p-4">
                <img src={Rest_Logo+item.card.info.imageId} className="w-full"/>
            </div>
        </div>
    ))}
    </div>
 );
}

export default ItemList;