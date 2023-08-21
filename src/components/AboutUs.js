import React from "react";
import UserProfileClass from "./UserProfileClass";
import UserContext from "../utilities/UserContext";
// const AboutUs = () => {
//    return <h1>Mock Swiggy !!!</h1> ;
// }
class AboutUs extends React.Component{
   render(){
      return(
         <>
            <h1>About Us!!!</h1>
            UserName:<UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
            </UserContext.Consumer>
            <UserProfileClass login={"Mounika"} location={"Manuguru"} />
            
         </>
      );
   }
}
export default AboutUs;