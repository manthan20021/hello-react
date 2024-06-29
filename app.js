
import React from "react"
import ReactDOM from "react-dom/client"
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

//#HEDER
//logo
//nav items
//login icon
//cart icon

//#BODY
//search-bar
//#restro-card contenar

//#CARD
//img
//name of restro
//star reating
//distence in mins
//manu

//#FOOTER
//LOGO
//contectus
//copiright
//links
//addres



//HADDER
const Hedder = () => {
    return(
        <header className="hed">
       <div className="nav">
       <img className="Logo" src="https://www.inspiredcoffee.org/wp-content/uploads/2020/05/Food-Icon-Orange.png"/>

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
</div>
</header>
    )
}

//CARD

const Card = ({resName, cuisines,starReating,minitsToDelevery}) => {
    return(
        <div className="card">
            <img className="res-img" src="https://tse4.mm.bing.net/th?id=OIP.nbr59CDTiou-ZIGF1F9sKAHaEo&pid=Api&P=0&h=180"/>
            <div className="restorInfo">
                <h2 className="res-name">{resName}</h2>
                <p>{cuisines}</p>
                <span className="starReating"><FaStar />{starReating}</span>

                    <h3> minits To Delevery:{minitsToDelevery}</h3> 
            </div>
        </div>
    )
}

const TitelContenar = () => {
    return(
        <div className="TitelContenar">
             <div className="card-contenar-heding">
        <h2>Top restaurant in Mumgi</h2>
        <input className="search" type="text" placeholder="Search"/>
        </div>
        </div>
    )
}

//BODY
const Body = () => {

    return(
        <div className="bodyLeout">
        <div className="cardContenar">
            <Card resName="Maghna foods" cuisines="biryan, pulav, utapam, edali, samosa" starReating="4.5" minitsToDelevery="25 - 35" />
            <Card resName= "Kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "Kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "Kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "Kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "Kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
            <Card resName= "kfc" cuisines="burger, pizza, fird chiken, chiken65" starReating="3.4" minitsToDelevery="40 - 45"/>  
        </div>
        </div>
      
      
    )
}


const AppLeout = () => {

    return(
        <div className="appLeout">
            <Hedder/>
            <TitelContenar/>
            <Body/>

            {/* <Footer/> */}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLeout/>)