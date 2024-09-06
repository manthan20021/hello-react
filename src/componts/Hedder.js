import React, { useState } from "react"
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LOGO_IMG } from "../utils/imges";

const Hedder = () => {

    const [login, setLogin] = useState("Login")

  
    

    return(
        <header className="hed">
       <div className="nav">
       <img className="Logo" src={LOGO_IMG} />

<ul className="navUl">
 <li>Home</li>
 <li>About</li>
 <li>Contect</li>
 <li>Offers</li>
</ul>

<div className="logDiv">
<FaRegUser />
<h6>Login</h6>
</div>

<div className="cartDiv">
<MdOutlineShoppingCart />
<h6>Cart</h6>
</div>

<button className="LoginBtn" 
onClick={() => {
   login === "Login"
   ?setLogin("Logout")
   :setLogin("Login")
    }}>{login}</button>
</div>


</header>
    )
}

export default Hedder