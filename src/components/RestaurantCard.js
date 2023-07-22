import { Link } from "react-router-dom";
import { Rest_Logo } from "../utilities/constants";
const RestCard = (props) => {
    // console.log(props.resData);
    const {cloudinaryImageId,
        name,
        cuisines,
        area,
        locality,
        avgRating,
        id
    } = props.resData?.data;
    return (
        <div className="res-card">
            <Link to={"restaurant/"+id}>
                <img alt="itemLogo" className="itemLogo" src={Rest_Logo
                    +cloudinaryImageId}>
                </img>
            </Link>
             <h3>{name}</h3>
             <h4>{cuisines.join(",")}</h4>
             <h4>{locality+","+area}</h4>
             <h4>{avgRating} Rating</h4>
        </div>
    );
}

export default RestCard;