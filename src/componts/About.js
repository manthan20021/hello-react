import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component {
    constructor(props){
        super(props)
       
        
    }
    render(){
        console.log("parent render is calld");
        return(
            <div className="aboutStyle">
                <UserClass/>
            </div>
        )
    }
 }
export default About


