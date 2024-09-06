import React, { useEffect,useState } from "react"
import Card from "./Card"
import { data } from "browserslist"
import { hasUnrecoverableErrors } from "react-refresh"
import { mainModule } from "process"
import { error, log } from "console"
import Shimar from "./Shimar"

const Body = () => {

const [resData, setResData] = useState([])
const [copyOfResData, setCopyOfResData] = useState([])

const [searchText, setSearchText] = useState("")



useEffect(()=> {
  fetchMothed()
},[])

const fetchMothed = async () => {
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  const json = await data.json()
  setResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setCopyOfResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)

  

};

//Conditinal Rendering

    return resData.length === 0 ? (
    <Shimar/>
  ) : ( 
        <div className="bodyLeout">

          <div className="search-box-contenar">
             {/* search functionality */}
          <div className="search">
            
            <input placeholder="search"
             value={searchText}
             onChange={(e)=>{
              setSearchText(e.target.value.toLowerCase());
              
             }}
             />
            <button onClick={() => {
             const searchdData = resData.filter(
                ele => ele.info.name.toLowerCase().includes(searchText))
                setCopyOfResData(searchdData)
                
            }}>search</button>
          </div>

          {/* filter functionality */}
            <button onClick={() => {
            let filterdRes = resData.filter(
              (res) => res.info.avgRating > 4
            )
            setResData(filterdRes)  
            }}>
              SE ABOU 4 STAR RETING
              </button>

        <div className="cardContenar"> 
          {
            copyOfResData.map(restaurantElement => {
                return <Card key={restaurantElement.info.id} resData = {restaurantElement} />
            })}

        </div>
          </div>
         
        </div> 
        
    )
}

export default Body