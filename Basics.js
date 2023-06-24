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
