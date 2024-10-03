import React, { useState } from "react"

const User = ({name, id, address, aducation}) => {

    const [count] = useState(0)
    const [count2] = useState(2)

    return(
        <div className="functionalUser">
        <h3>count : {count}</h3>
        <h3>count2: {count2}</h3>
    <h1>{name}</h1>
    <h1>{id}</h1>
    <h1>{address}</h1>
    <h1>{aducation}</h1>
    </div>
    ) 
}

export default User