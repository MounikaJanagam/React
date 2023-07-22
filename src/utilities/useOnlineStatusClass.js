import React from "react";
class OnlineStatusClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            onlineStatus : true,
        }
    };
    componentDidUpdate(){
        console.log("useclass update",this.state.onlineStatus);
        window.addEventListener("online",()=>{
            this.setState(
                onlineStatus = true,
            );
        });

        window.addEventListener("offline",()=>{
            this.setState(
                onlineStatus = false,
            )
        });
        console.log("useclass after update",this.state.onlineStatus);
    };
    render(){
        console.log("render useclass", this.state.onlineStatus);
        return <h2>{this.state.onlineStatus}</h2> ;
    }
}

export default OnlineStatusClass;