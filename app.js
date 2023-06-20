import React from "react";
import ReactDom from "react-dom/client"

h3Tag = React.createElement("h3",{},"h3 Tag");
h2Tag = React.createElement("h2",null,h3Tag);
h1Tag = React.createElement("h1",null,h2Tag);
divTag = React.createElement("div",{className:"title"},h1Tag);

// root = ReactDom.createRoot(document.getElementById("root"));
// root.render(divTag);

const DivJSX = <div className="title">
                    <h1>
                        <h2>
                            <h3> h3 Tag JSX</h3>
                        </h2>
                    </h1>
                </div>


const Divfun = ()=>{
   return ( <div className="title">
        <h1>
            <h2>
                <h3> h3 Tag fun</h3>
            </h2>
        </h1>
    </div>
   );
};

const Fun2 = () =>{
    
    return (
        <><h1>component composition</h1>
        {DivJSX}
        {Divfun()}
        <Divfun/>
        </>
    ); 
}

function HeaderComp(){
    
    return(
    <div className="header">
    <div >
        <img className="appLogo" alt="app-logo" src="data:image/png;base64,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"></img>
    </div>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
            <li>Cart</li>
        </ul>
    </div>
    </div>
    );
}

const RestList = () => {
    return (
        <div className="res-list">
           {  dataobj.map( (rest) =>(
                <RestCard key={rest.data.id} resData={rest}></RestCard>
           ))
}
        </div>
    );
}
const RestCard = (props) => {
    console.log(props.resData);
    const {cloudinaryImageId,
        name,
        cuisines,
        area,
        locality,
        avgRating
    
    } = props.resData?.data;
    return (
        <div className="res-card">
            <img alt="itemLogo" className="itemLogo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" 
            +cloudinaryImageId}></img>
             <h3>{name}</h3>
             <h4>{cuisines.join(",")}</h4>
             <h4>{locality+","+area}</h4>
             <h4>{avgRating} Rating</h4>
        </div>
    );
}

const AppLayout = () =>{
   return (
    <>
        <HeaderComp/>
        <RestList />
    </>
    ) ;
}
root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

const dataobj =  [
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "40376",
    "name": "Santosh Dhaba Jashan",
    "uuid": "e160f395-466a-4cf0-b473-c08841259f70",
    "city": "3",
    "area": "Koti",
    "totalRatingsString": "5000+ ratings",
    "cloudinaryImageId": "ioxt85wcbgg3qtadlxik",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Italian"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "slaString": "30 MINS",
    "lastMileTravel": 1.7000000476837158,
    "slugs": {
    "restaurant": "santosh-dhaba-jashan-abids-abids-koti",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "4-1-969/970, Ahuja Estate Lane, opp Santosh Sapna Theatre, Abids, Hyderabad",
    "locality": "Secunderabad",
    "parentId": 19162,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6921741~p=1~eid=00000188-cf23-0602-1467-1c1100970166",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.7 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "40376",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "lastMileTravel": 1.7000000476837158,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 5000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "4320",
    "name": "Mehfil",
    "uuid": "4dee4970-8673-42b6-8a49-cab0efdb258f",
    "city": "3",
    "area": "Narayanguda",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "esp0fhddgfgdss5hyhpi",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Tandoor",
    "Chinese",
    "Kebabs"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 18,
    "minDeliveryTime": 18,
    "maxDeliveryTime": 18,
    "slaString": "18 MINS",
    "lastMileTravel": 2,
    "slugs": {
    "restaurant": "mehfil-narayanguda-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Near Narayanguda Flyover, Narayanguda, Hyderabad",
    "locality": "Near Narayanguda Flyover",
    "parentId": 637,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "4320",
    "deliveryTime": 18,
    "minDeliveryTime": 18,
    "maxDeliveryTime": 18,
    "lastMileTravel": 2,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.9",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "145240",
    "name": "Al Akbar Fast Food",
    "uuid": "56c016f2-4e1c-42c8-a903-01f94628e359",
    "city": "3",
    "area": "Pathar Gatti",
    "totalRatingsString": "5000+ ratings",
    "cloudinaryImageId": "srfpm9aknbsmieockm1w",
    "cuisines": [
    "Chinese",
    "North Indian"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "slaString": "33 MINS",
    "lastMileTravel": 3.700000047683716,
    "slugs": {
    "restaurant": "al-akbar-fast-food-charminar-charminar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Panjayesh, Beside Armaan hotel, Charminar",
    "locality": "Charminar",
    "parentId": 19626,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3800,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3800,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3800",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6920443~p=4~eid=00000188-cf23-0602-1467-1c120097045b",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "3.7 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "15% OFF",
    "subHeader": "UPTO ₹45",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "145240",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "lastMileTravel": 3.700000047683716,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.9",
    "totalRatings": 5000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "367769",
    "name": "Lucky Restaurant",
    "uuid": "0d2cb79c-7f66-4009-b393-3f9015ba849d",
    "city": "3",
    "area": "MasabTank",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "qems028i3da5rxf81rbp",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Tandoor"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 29,
    "minDeliveryTime": 29,
    "maxDeliveryTime": 29,
    "slaString": "29 MINS",
    "lastMileTravel": 5,
    "slugs": {
    "restaurant": "lucky-restaurant-banjara-hills-banjara-hills",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Dana Chambers, Saifabad Rd, Sham Nagar Colony, Chintal, Hyderabad, Telangana 500004",
    "locality": "Banjara Hills",
    "parentId": 293683,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 5300,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 5300,
    "message": "",
    "title": "Delivery Charge",
    "amount": "5300",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "5 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "367769",
    "deliveryTime": 29,
    "minDeliveryTime": 29,
    "maxDeliveryTime": 29,
    "lastMileTravel": 5,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.9",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "4650",
    "name": "Bawarchi",
    "uuid": "4e784916-87ff-4951-9c21-2f0c1df1fb31",
    "city": "3",
    "area": "New Nallakunta",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "smfhai0o8rnjuzp3ngxu",
    "cuisines": [
    "Biryani",
    "Tandoor",
    "Chinese",
    "Indian",
    "Desserts",
    "Kebabs",
    "Mughlai"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "slaString": "31 MINS",
    "lastMileTravel": 3,
    "slugs": {
    "restaurant": "bawarchi-nallakunta-vidyanagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Beside Astoria Hotel, RTC Cross Road, Chikkadpally, Nallakunta, Hyderabad",
    "locality": "New Nallakunta",
    "parentId": 100,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3800,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3800,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3800",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "3 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "4650",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "lastMileTravel": 3,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.0",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "10069",
    "name": "Shree Santosh Family Dhaba",
    "uuid": "14cbe2ef-40fa-415f-9f75-3890b98dfee9",
    "city": "3",
    "area": "Narayanguda",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "pro9wrdscz7nd8ezzrwg",
    "cuisines": [
    "Punjabi",
    "North Indian",
    "Chinese",
    "Tandoor"
    ],
    "tags": [],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 26,
    "minDeliveryTime": 26,
    "maxDeliveryTime": 26,
    "slaString": "26 MINS",
    "lastMileTravel": 2,
    "slugs": {
    "restaurant": "shree-santosh-family-dhaba-old-mla-quarters-road-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "3-5-890, Paras Chambers, Telugu Academy Lane,Himayath Nagar, Hyderabad",
    "locality": "Old MLA Quarters Road",
    "parentId": 3003,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6922269~p=7~eid=00000188-cf23-0602-1467-1c1300970723",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "15% OFF",
    "subHeader": "ABOVE ₹700",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "10069",
    "deliveryTime": 26,
    "minDeliveryTime": 26,
    "maxDeliveryTime": 26,
    "lastMileTravel": 2,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "4138",
    "name": "Grand Hotel",
    "uuid": "c1a1d888-51b7-4bcc-b539-f884c796a015",
    "city": "3",
    "area": "Koti",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "g1arzw6qd7g9affkmgzk",
    "cuisines": [
    "Biryani",
    "Chinese",
    "Tandoor",
    "Haleem"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 21,
    "minDeliveryTime": 21,
    "maxDeliveryTime": 21,
    "slaString": "21 MINS",
    "lastMileTravel": 1.2000000476837158,
    "slugs": {
    "restaurant": "grand-hotel-abids-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Opposite Big Bazaar, 4-1-395,Abids Road, Hyderabad",
    "locality": "Abids Road",
    "parentId": 4001,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "4138",
    "deliveryTime": 21,
    "minDeliveryTime": 21,
    "maxDeliveryTime": 21,
    "lastMileTravel": 1.2000000476837158,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "43619",
    "name": "Chung Hua Restaurant",
    "uuid": "ea6824e9-8cc0-408d-97e9-391f31b8c558",
    "city": "3",
    "area": "Adarsh Nagar",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "nccgylba8b5vvh55uv0p",
    "cuisines": [
    "Chinese",
    "Asian",
    "Thai",
    "Seafood",
    "Singaporean",
    "Malaysian"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 32,
    "minDeliveryTime": 32,
    "maxDeliveryTime": 32,
    "slaString": "32 MINS",
    "lastMileTravel": 3.5,
    "slugs": {
    "restaurant": "chung-hua-chinese-restaurant-basheer-bagh-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "5-9-29, Opposite Paigah Plaza, Mira Mansion, Hill Fort, Adarsh Nagar, Hyderabad, Telangana 500063, India",
    "locality": "Hira Mansion",
    "parentId": 270,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3800,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3800,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3800",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6920970~p=10~eid=00000188-cf23-0602-1467-1c1400970a1f",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "3.5 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "ABOVE ₹1200",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "43619",
    "deliveryTime": 32,
    "minDeliveryTime": 32,
    "maxDeliveryTime": 32,
    "lastMileTravel": 3.5,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.2",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "131870",
    "name": "4M Biryani House",
    "uuid": "3b8256f4-4e99-4cdf-8b9e-9dbd267af08a",
    "city": "3",
    "area": "Musheerabad",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "o685uklvqias8ez1qgxz",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Chinese"
    ],
    "tags": [],
    "costForTwo": 25000,
    "costForTwoString": "₹250 FOR TWO",
    "deliveryTime": 42,
    "minDeliveryTime": 42,
    "maxDeliveryTime": 42,
    "slaString": "42 MINS",
    "lastMileTravel": 4.300000190734863,
    "slugs": {
    "restaurant": "4m-biryani-house-musheerabad-nallakunta-vidyanagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Opposite Humera Hotel, Badi Masjid, Bholakpur, Musheerabad, Hyderabad",
    "locality": "",
    "parentId": 19646,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3800,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3800,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3800",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 1,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "4.3 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "131870",
    "deliveryTime": 42,
    "minDeliveryTime": 42,
    "maxDeliveryTime": 42,
    "lastMileTravel": 4.300000190734863,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "IT_IS_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "100942",
    "name": "Lucky Multicuisine Restaurant",
    "uuid": "8e677eb2-065e-4021-ab21-b94d70357977",
    "city": "3",
    "area": "Somajiguda",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "yeyiqeakfhjj6cmeocsc",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Tandoor",
    "South Indian"
    ],
    "tags": [],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "slaString": "30 MINS",
    "lastMileTravel": 6.400000095367432,
    "slugs": {
    "restaurant": "lucky-multicuisine-restaurant-somajiguda-somajiguda-khairtabad",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Door no;6-3-1089/f/33,somajiguda,hyd,circle no.10(old mch circle-v)khairtabad,hyd-central zone, telengana 500082.",
    "locality": "\nRaj Bhavan Quarters Colony",
    "parentId": 18963,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 6100,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 6100,
    "message": "",
    "title": "Delivery Charge",
    "amount": "6100",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 1,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "6.4 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "100942",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "lastMileTravel": 6.400000095367432,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "IT_IS_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.8",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "385130",
    "name": "Santosh Family Dhaba",
    "uuid": "aa388110-23de-42bf-8396-52e16cbf3bb3",
    "city": "3",
    "area": "Himayath Nagar",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "kxvudr9703tklnjsolsv",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Chinese",
    "Tandoor",
    "Indian"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 25,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "slaString": "25 MINS",
    "lastMileTravel": 1.2999999523162842,
    "slugs": {
    "restaurant": "santosh-family-dhaba-himayath-nagar-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "4-1-824/A/2,DIAMOND COMPLEX,NEAR RAMAKRISHNA THEATRE,J N ROAD,TROOP BAZAR,ABIDS",
    "locality": "Near Ramakrishna Theatre",
    "parentId": 5002,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6921232~p=13~eid=00000188-cf23-0602-1467-1c1500970d00",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "385130",
    "deliveryTime": 25,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "lastMileTravel": 1.2999999523162842,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.9",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "13434",
    "name": "Cafe 555 & Aqeeq Restaurant",
    "uuid": "2379d20f-aa9f-49ae-8077-e275fff77faf",
    "city": "3",
    "area": "Masab Tank",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "r5ayymu2bfkse9yt3w3b",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Chinese"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "slaString": "30 MINS",
    "lastMileTravel": 5,
    "slugs": {
    "restaurant": "cafe-555-banjara-hills",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "A/12,, Masab Tank Road, Owaisi Pura, Mehdipatnam, Hyderabad, Telangana 500028",
    "locality": "Owaisi Pura",
    "parentId": 19138,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 5300,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 5300,
    "message": "",
    "title": "Delivery Charge",
    "amount": "5300",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "5 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "13434",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "lastMileTravel": 5,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "6994",
    "name": "Santosh Dhaba Exclusive",
    "uuid": "e581eb1b-746e-4b02-a31e-ccd03f835b9b",
    "city": "3",
    "area": "Koti",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "jllcesio37olflwnvter",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Chinese",
    "Italian",
    "Mexican",
    "Desserts"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 23,
    "minDeliveryTime": 23,
    "maxDeliveryTime": 23,
    "slaString": "23 MINS",
    "lastMileTravel": 1.100000023841858,
    "slugs": {
    "restaurant": "santosh-dhaba-exclusive-hanuman-tekdi-abids-koti",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "8-2-629/1/2, Hotel Jaya International Lane, Hanuman Tekdi,Abids, Hyderabad",
    "locality": "Hanuman Tekdi",
    "parentId": 8784,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=7009813~p=16~eid=00000188-cf23-0602-1467-1c160097106b",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.1 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹100",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "6994",
    "deliveryTime": 23,
    "minDeliveryTime": 23,
    "maxDeliveryTime": 23,
    "lastMileTravel": 1.100000023841858,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.0",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "237054",
    "name": "Cafe Bahar since 1973",
    "uuid": "1f855219-ddd4-49cc-b1fa-de1354158426",
    "city": "3",
    "area": "Basheer Bagh",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "yrycuz88yy7lm2qbsdv6",
    "cuisines": [
    "Biryani",
    "Chinese",
    "Indian",
    "Kebabs",
    "Tandoor"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 21,
    "minDeliveryTime": 21,
    "maxDeliveryTime": 21,
    "slaString": "21 MINS",
    "lastMileTravel": 2.4000000953674316,
    "slugs": {
    "restaurant": "cafe-bahar-himayath-nagar-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Old MLA Quarters, Hyderguda, Basheer Bagh",
    "locality": "",
    "parentId": 316607,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.4 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "237054",
    "deliveryTime": 21,
    "minDeliveryTime": 21,
    "maxDeliveryTime": 21,
    "lastMileTravel": 2.4000000953674316,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "109168",
    "name": "Al Rabea Al Arabi Cafeteria",
    "uuid": "f94c1d30-76b4-438a-bddf-6442286fbb6e",
    "city": "3",
    "area": "Santosh Nagar",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "lu7b9y7xps4icwn6xzfj",
    "cuisines": [
    "Lebanese",
    "Arabian"
    ],
    "tags": [],
    "costForTwo": 25000,
    "costForTwoString": "₹250 FOR TWO",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "slaString": "31 MINS",
    "lastMileTravel": 6.300000190734863,
    "slugs": {
    "restaurant": "al-rabea-al-arabi-cafeteria-santhosh-nagar-santoshnagar-saidabad",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "9-8-118 BESIDE JB NASHTA POINT SANTOSH NAGAR OPPOSITE LUCKY HOTEL  HYDERABAD",
    "locality": "Opposite Lucky Hotel",
    "parentId": 7582,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 6100,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 6100,
    "message": "",
    "title": "Delivery Charge",
    "amount": "6100",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "6.3 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "109168",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "lastMileTravel": 6.300000190734863,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    }
    ];
    
/*
Header
  logo
  nav-items

*/