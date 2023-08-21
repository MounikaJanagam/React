import React, { Suspense, lazy, useState } from "react";
import ReactDom from "react-dom/client";
import HeaderComp from "./src/components/Header";
import {RestList} from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
//import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import ErrorComp from "./src/components/ErrorComp";
import RestaruntMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utilities/UserContext";
const AppLayout = () =>{
  const [userName, setUserName] = useState("");
   return (
    <>
      <UserContext.Provider value={{loggedInUser:"Mounika"}}>
        <HeaderComp/>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>   
        {/* 1.nesting Context the vale provided in this contect provider efftects inside outlet header will have first context value which is setting above 
            2.setUserName is same like loggedInUser param we are passing into Context using Provider
                loggedInUser is existing Param in UserContext we are updating it with userName
                setUserName(state variable) is *new param* passing to UserContext using Provider (to change userName) while using the Context setUserName can be used as param of the userContext
        */}
          <Outlet />
        </UserContext.Provider>
      </UserContext.Provider>
    </>
    ) ;
}
const About =  lazy(()=>import("./src/components/AboutUs"));
const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <ErrorComp/>,
    children :[
      {
        path : "/",
        element : <RestList/>,
      },
      {
        path : "/About",
        element :( <Suspense fallback={<h1>loading about us..</h1>}> 
                       <About/>
                  </Suspense>
              ),
      },
      {
        path : "/Contact",
        element : <ContactUs/>,
      },
      {
        path : "/restaurant/:resId",
        element : <RestaruntMenu/>,
      }
    ]
  },
  
]);
root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

    
/*
Header
  logo
  nav-items

*/