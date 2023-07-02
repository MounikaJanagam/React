import React from "react";
import UserProfileClass from "./UserProfileClass";
// const AboutUs = () => {
//    return <h1>Mock Swiggy !!!</h1> ;
// }
class AboutUs extends React.Component{
   render(){
      return(
         <>
            <h1>About Us!!!</h1>
            {console.log("Parent")}
            <UserProfileClass login={"Mounika"} location={"Manuguru"} />
            
         </>
      );
   }
}
export default AboutUs;