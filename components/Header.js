import { App_Logo } from "../utilities/constants";
function HeaderComp(){
    
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
        </ul>
    </div>
    </div>
    );
}

export default HeaderComp;                  // default export