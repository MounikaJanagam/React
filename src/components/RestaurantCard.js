import { Link } from "react-router-dom";
import { Rest_Logo } from "../utilities/constants";
const RestCard = (props) => {
    // console.log(props.resData);
    const {cloudinaryImageId,
        name,
        cuisines,
        area,
        locality,
        costForTwo,
        avgRating,
        id
    } = props.resData?.info;
    return (
        <div className="m-4 p-4 w-[232px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <Link to={"restaurant/"+id}>
                <img alt="itemLogo" className="" src={Rest_Logo
                    +cloudinaryImageId}>
                </img>
            </Link>
             <h3 className="font-bold text-base py-5">{name}</h3>
             <h4 className="">{cuisines.join(",")}</h4>
             <h4>{locality+","+area}</h4>
             <h4>{costForTwo}</h4>
             <h4>{avgRating} Rating</h4>
        </div>
    );
}

export default RestCard;