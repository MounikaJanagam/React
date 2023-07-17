import { useEffect, useState } from "react";
import { MENU_API } from "./constants"

const useRestaurantMenu = (resId)=>{
    const [restMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () =>{
        const apidata = await fetch(MENU_API+resId);
        const jsondata = await apidata.json();
        setResMenu(jsondata.data);
    }

    return restMenu;
}

export default useRestaurantMenu;