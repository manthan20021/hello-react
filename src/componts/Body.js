import React, { useEffect,useState } from "react"
import Card from "./Card"
import Shimar from "./Shimar"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"


const Body = () => {

const [resData, setResData] = useState([])
const [copyOfResData, setCopyOfResData] = useState([])
const [searchText, setSearchText] = useState("")
const [page, setPage] = useState(1)   

console.log(useState());
useEffect(()=> {
  fetchMothed() 

  function toClenup(){
    console.log("to cleanup messs");
    
  }
},[page])

const fetchMothed = async () => {
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING_page=${page}')
  const json = await data.json()


  let restaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  console.log(restaurantData);
  
  setResData((prev) => [...prev, ...restaurantData])
let copyOfRestaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
  setCopyOfResData((prev) => [...prev, ...copyOfRestaurantData])
};

//Scrolling effect

useEffect(() => {
  window.addEventListener("scroll", handelScroll) 
},[])

const handelScroll = async () => {
 
  let scrollTope = document.documentElement.scrollTop
  let innerHighte = window.innerHeight 
  scrollTope += innerHighte
  let scrollHeighte = document.documentElement.scrollHeight

  try {
    if(scrollTope >= scrollHeighte){
      setPage((prev) => prev + 1)
    }
  } catch (error) {
    setPage(error)
  }
    
}



//Conditinal Rendering
 
const onlineStatus = useOnlineStatus()

if(onlineStatus === false) return <h1>you are of line now pleses turn on you'r internet conection</h1>

    return resData.length === 0 ? (
    <Shimar/>
  ) : ( 
        <div className= " body  ">
          <div className="" >
             {/* search functionality */}
          <div className="search&filterBox sm:w-full sm:h-14 sm:flex sm:justify-center sm:items-center hidden  ">
          <div className="search sm:h-8 sm:w-96 sm:flex sm:items-center sm:justify-between hidden "> 
            <input className="sm:h-full sm:w-3/4 sm:rounded-md sm:pl-2 border-2  " placeholder="search"
             value={searchText}
             onChange={(e)=>{
              setSearchText(e.target.value.toLowerCase());
             }}
             />
            <button className="sm:bg-[#FF6D16] sm:text-white sm:h-full sm:w-1/5 sm:rounded-md" onClick={() => {
             const searchdData = resData.filter(
                ele => ele.info.name.toLowerCase().includes(searchText))
                setCopyOfResData(searchdData)
                
            }}>search</button>
          </div>

          {/* filter functionality */}
            <button className="bg-[#FF6D16] h-8 ml-6 px-3 rounded-md text-white " onClick={() => {
            let filterdRes = resData.filter(
              (res) => res.info.avgRating > 4
            )
            setResData(filterdRes)  
            }}>
              SE ABOU 4 STAR RETING
              </button>
          </div>

     
       <div className="w-full h-auto flex justify-center item">
       <div className="cardContenar grid sm:grid-cols-4 grid-cols-2 sm:max-w-[1200px] sm:min-w-[1200px]"> 
          {
            copyOfResData.map(restaurantElement => {
                return <Link key={restaurantElement.info.id} to={"/manu/" + restaurantElement.info.id}> <Card  resData = {restaurantElement} /></Link>
                
            })}

        </div>
       </div>
          </div>
         
        </div> 
        
    )
}

export default Body