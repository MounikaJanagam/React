import { useState } from "react";
import { App_Logo } from "../utilities/constants";
function HeaderComp(){
    const [login_logout,setLoginLogout] = useState("Login");
    return(
    <div className="header">
    <div >
        <img className="appLogo" alt="app-logo" src={App_Logo}></img>
    </div>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
            <li>Cart</li>
            <li>
            <button onClick={
                ()=>{
                    setLoginLogout(login_logout=="Login" ? "Logout" : "Login");
                }
            }>{login_logout}</button>
            </li>
        </ul>
    </div>
    </div>
    );
}

export default HeaderComp;                  // default export