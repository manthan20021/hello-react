import Shimar from "./Shimar"
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa6"
import { FaRupeeSign } from "react-icons/fa";
import useManuInfo from "../utils/useManuInfo"
import ItemCategory from "./ItemCategory";
import {useContext, useState } from "react";
import ManuContext from "../Context/ManuContext/ManuContext";







const Manu = () => {
  
  const [showIndex, setShowIndex] = useState(null)
 
const {resid} = useParams();
const resManuInfo = useManuInfo(resid); //<-- costum hook for fetching the res-Manu-Data

const manuData = useContext(ManuContext)
console.log(manuData.name);

 



const ItemCategoryss = resManuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)




if(resManuInfo === null) return <Shimar/>;

const {
        name, 
        costForTwoMessage, 
        avgRatin,
        totalRatingsString,
        areaName, 
        cuisines
    } = resManuInfo?.data?.cards[2]?.card?.card?.info || {} //<---what is tha mining of thsi

   const {
    minDeliveryTime, 
    maxDeliveryTime
} = resManuInfo?.data?.cards[2]?.card?.card?.info?.sla || {}


//   let {
//     itemCards
// } 
// = resManuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]

    let {
        itemCards
    } = resManuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

   

    //restrount manu dashbord
    return <div className=" sm:w-full w-[400px] h-auto sm:flex sm:items-center sm:justify-center">
           <div className="subManuBody  sm:max-w-[768px] sm:min-w-[768px]">
           <h2 className="font-bold text-2xl mt-3" >{name}</h2>
            <div className="manuInfoContenar shadow-xl border-[.1px] border-gray-200 mt-3 mb-7 sm:mb-19 sm:min-h-44 rounded-xl p-4">
            <div>
                <h4 className="font-bold "> <span id="redingBg"> {avgRatin}</span> ({totalRatingsString}) {costForTwoMessage}</h4>
                <h5 className="font-semibold text-[#FF6D16]">{cuisines.join(',')}</h5>
              <div className="groop-of-area-deliviery-time">
                <div className="meargeicon">
                    <div className="c-1"></div>
                    <div className="line"></div>
                    <div className="c-2"></div>
                 </div>
          <div>
          <p className="font-semibold text-2 "> <span id="Outlet">Outlet:  </span>{areaName}</p>
          <p id="deliverytime">{minDeliveryTime} - {maxDeliveryTime} mins</p>
          </div>
          </div>
          </div>
          </div>
         
          {
            ItemCategoryss.map((categorys, index) =>{
              //this is controld coponent 
              return <ItemCategory
              key={categorys?.card?.card?.title}
              categoryData = {categorys?.card?.card}
              togelItemCards = {index === showIndex && true}
              setShowIndex={() => setShowIndex(index)}
              />
            })

            
          }

  
          {/* restrouent manu list */}
              <ul>
              {
              
              itemCards.map( items =>   <li
              className="border-b-[.1px] border-gray-400 list-none sm:mb-6 p-10" 
                key={items.card.info.id}
                >
                
                 <h3 className="font-bold">{items.card.info.name}</h3>
                    {
                    items.card.info.defaultPrice?(
                    <h3 className="font-bold"><FaRupeeSign />:{items.card.info.defaultPrice / 100}</h3>
                 ) : (
                     <h3 className="font-bold flex items-center"><FaRupeeSign />:{items.card.info.price / 100} </h3> 
                    )
                 }
                 <p>{items.card.info.description}</p>
                <button className="bg-[#FF6D16] font-bold text-white px-3 py-1 rounded-md mb-2">ADD</button>
 
                </li>)
                }
                </ul>
                </div>
                </div>
    
}

export default Manu


// {items.card.info.defaultPrice / 100}

//resManuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0] || {}