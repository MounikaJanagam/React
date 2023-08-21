import { useContext, useState } from "react";
import { App_Logo } from "../utilities/constants";
import { Link } from "react-router-dom";
import OnlineStatusClass from "../utilities/useOnlineStatusClass";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";
function HeaderComp(){
    const [login_logout,setLoginLogout] = useState("Login");
    const online = useOnlineStatus();
  //  const loggedInUserValue = useContext(UserContext);  if only one defaule value given instead of obj
  const {loggedInUser} = useContext(UserContext);  // the param declared in useContext(Object)
    return(
    <div className="flex justify-between bg-pink-100 shadow-lg">
    <div >
        <img className="w-20" alt="app-logo" src={App_Logo}></img>
    </div>
    <div>
        <ul className="flex p-5">
            <li className="px-4">Online:{online ? '🟢' : '🔴'}</li>
            <li className="px-4">
                <Link to={'/'}>Home</Link>
            </li>
            <li className="px-4">
                <Link to={'/About'}>AboutUs</Link>
            </li>
            <li className="px-4">
                <Link to={"/Contact"}>ContactUs</Link>
            </li>
            <li className="px-4">
                Cart
            </li>
            <li className="px-4">
                UserName:{loggedInUser}
            </li>
            <li className="px-4 rounded-full bg-sky-300">
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