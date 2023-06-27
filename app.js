import React from "react";
import ReactDom from "react-dom/client";
import HeaderComp from "./components/Header";
import {RestList} from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ErrorComp from "./components/ErrorComp";
import RestaruntMenu from "./components/RestaurantMenu";
const AppLayout = () =>{
   return (
    <>
        <HeaderComp/>
        <Outlet />
    </>
    ) ;
}

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
        element : <AboutUs/>,
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