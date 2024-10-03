import React from "react";

class UserClass extends React.Component{
    constructor(){
       super() //<--this super method alouse us to use "this" keey-word and get pearent's value

    this.state = {
        userInfo:{
            avatar_url: "domy",
            login : "asldkfja",
            id : "not avaleval"
        },
    }
}
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/manthan2021")
        const json = await data.json()
        this.setState({
            userInfo: json
        })
    }
    componentWillUnmount(){
        console.log("to clean up messs");
    }
    
    render(){
        const{avatar_url, login, id} = this.state.userInfo
        return(
            <div className="classUser">
                <img src={avatar_url}/>
                <h1>{login}</h1>
                <h1>{id}</h1>
            </div>
        )
    }
}

export default UserClass
