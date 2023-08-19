import { useState } from "react";
import ItemList from "./itemList";
const MenuAccordian = ({data, showItems, setShowIndex})=> {
    return(
        <div className="w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-4 text-left">
            <div className="flex justify-between cursor-pointer" onClick={setShowIndex}>
                <div>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                </div>
                <span>⬇️</span>
            </div>
            <div>
               {showItems && <ItemList itemCards={data.itemCards}/> }
              
            </div>
        </div>
        
    );
}

export default MenuAccordian;