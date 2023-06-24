import React from "react";
import ReactDom from "react-dom/client";
import HeaderComp from "./components/Header";
import {RestList} from "./components/Body";

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

    
/*
Header
  logo
  nav-items

*/