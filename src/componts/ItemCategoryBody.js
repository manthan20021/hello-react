import React from "react";
import { CARD_IMG } from "../utils/Consten";

const ItemCategoryBody = ({ itemCardsBodyData}) => {
  return (
    <div>
      {
        itemCardsBodyData.map((item, itemIndex) =>{

          return item.itemCards.map((infoData, indexOfInfo) => {
            return  <div key={infoData?.card?.info?.name || indexOfInfo} className="sm:flex sm:justify-between sm:items-center p-3 border-b-2 border-gray-300"   >
            <div className="name-price-description-section">
          <h2 className="font-bold sm:text-1xl text-black">{infoData?.card?.info?.name}</h2>
           <h6 className="font-bold sm:text-1xl">₹{infoData?.card?.info?.price / 100}</h6>
           <p className="text-gray-500">{infoData?.card?.info?.description}</p>
          </div>
          
          <div  className="sm:min-w-28 sm:max-w-28 w-full  flex flex-col items-center my-4  ">
          <img className="sm:w-full w-full rounded-md" src={CARD_IMG + infoData?.card?.info?.imageId}/>
           <button className="bg-[#FF6D16] font-bold text-white sm:text-sm text-2xl sm:py-1  py-4 rounded-md w-full">ADD+</button>
          </div>
          </div>
          })
          
        })
      }
    </div>
  )
}; 
     export default ItemCategoryBody


     