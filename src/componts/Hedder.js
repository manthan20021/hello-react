import React, { useEffect, useState } from "react"
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LOGO_IMG } from "../utils/Consten";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Hedder = () => {

    const [login, setLogin] = useState("Login")
    const onlineStatus = useOnlineStatus()

    
    return(
        <header className="sm:w-full sm:flex sm:items-center sm:justify-center sm:shadow-md hidden ">
       <div  className="md:max-w-[1200px] md:min-w-[1200px] sm:h-20 sm:flex sm:items-center sm:justify-between">
       <img className="h-16" src={LOGO_IMG} />

<ul className="sm:flex">
    <li className="sm:ml-5 ">online status: {onlineStatus ? "✅" : "🔴" }</li>
   
 <li className="sm:ml-5 "> <Link to="/">Home</Link></li>
 <li className="sm:ml-5 "><Link to="/about">About</Link></li>
 <li className="sm:ml-5 "><Link to="/contact">Contact</Link></li>
 <li className="sm:ml-5 "><Link to="/swiggytomart">swiggytomart</Link></li>
 <li className="sm:ml-10 ">
<MdOutlineShoppingCart />
<h6><Link to="/cart">Cart</Link></h6>
</li>
<button className="sm:ml-10 " 
onClick={() => {
   login === "Login"
   ?setLogin("Logout")
   :setLogin("Login")
    }}><FaRegUser />{login}</button>
</ul>

</div>
</header>
    )
}

export default Hedder