import React from "react";
import ReactDom from "react-dom/client"

h3Tag = React.createElement("h3",{},"h3 Tag");
h2Tag = React.createElement("h2",null,h3Tag);
h1Tag = React.createElement("h1",null,h2Tag);
divTag = React.createElement("div",{className:"title"},h1Tag);

// root = ReactDom.createRoot(document.getElementById("root"));
// root.render(divTag);

const DivJSX = <div className="title">
                    <h1>
                        <h2>
                            <h3> h3 Tag JSX</h3>
                        </h2>
                    </h1>
                </div>


const Divfun = ()=>{
   return ( <div className="title">
        <h1>
            <h2>
                <h3> h3 Tag fun</h3>
            </h2>
        </h1>
    </div>
   );
};

const Fun2 = () =>{
    
    return (
        <><h1>component composition</h1>
        {DivJSX}
        {Divfun()}
        <Divfun/>
        </>
    ); 
}

function HeaderComp(){
    
    return(
    <div className="header">
    <div className="logo">
        <img alt="app-logo" src="data:image/png;base64,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"></img>
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

const AppLayout = () =>{
   return <HeaderComp/> ;
}
root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

/*
Header
  logo
  nav-items

*/