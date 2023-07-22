import React, { Suspense, lazy } from "react";
import ReactDom from "react-dom/client";
import HeaderComp from "./src/components/Header";
import {RestList} from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
//import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import ErrorComp from "./src/components/ErrorComp";
import RestaruntMenu from "./src/components/RestaurantMenu";
const AppLayout = () =>{
   return (
    <>
        <HeaderComp/>
        <Outlet />
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