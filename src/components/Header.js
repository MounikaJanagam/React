import { useState } from "react";
import { App_Logo } from "../utilities/constants";
import { Link } from "react-router-dom";
import OnlineStatusClass from "../utilities/useOnlineStatusClass";
import useOnlineStatus from "../utilities/useOnlineStatus";
function HeaderComp(){
    const [login_logout,setLoginLogout] = useState("Login");
    const online = useOnlineStatus();
    return(
    <div className="header">
    <div >
        <img className="appLogo" alt="app-logo" src={App_Logo}></img>
    </div>
    <div className="nav-items">
        <ul>
            <li>Online:{online ? '🟢' : '🔴'}</li>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/About'}>AboutUs</Link>
            </li>
            <li>
                <Link to={"/Contact"}>ContactUs</Link>
            </li>
            <li>
                Cart
            </li>
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