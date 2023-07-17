import React from "react";
class useOnlineStatusClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            onlineStatus : true,
        }
    };
    componentDidMount(){
        
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
        return onlineStatus ;
    };
    render(){

    }
}

export default useOnlineStatusClass;