import React from "react";
class UserProfileClass extends React.Component{
    constructor(props){
        super();
        this.state = {
            userInfo :{
                login : "Mounika",
            }
        }
     //   console.log(props);  // without super also props are one time printing with error ???? 
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/MounikaJanagam");
        const json = await data.json();
        this.setState({ userInfo : json});
      //  console.log(this.state.userInfo);    //  here userInfo is still userInfo :{login : "Mounika",}  the setState(apidata) will be updated after componentDidMount() in render method 
        this.timer = setInterval(() =>{
            console.log("Interval");
        },1000)
    }

    componentDidUpdate(){
        console.log("component Did Update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log(" profile unmount");
    }
    render(){
       // const {login,location} = this.props;
       const {login,id,avatar_url} = this.state.userInfo;
   //    console.log(this.state.userInfo);
        return(
            <div className="user-profile">
                <img alt="profile" src={avatar_url} style={{width : '100%'}}></img>
                <h2>Name : {login}</h2>
                <h2>id : {id}</h2>
            </div>
        );      
    }
}

export default UserProfileClass;