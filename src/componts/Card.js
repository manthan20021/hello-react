import {CARD_IMG} from "../utils/Consten";
import React from "react";
import { FaStar } from "react-icons/fa6";



const Card = (props) => {
    const {resData} = props;
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId
    } = resData?.info     
    
    const {deliveryTime} = resData.info.sla
  
      return(
        
      <div className="h-auto sm:w-64 w-full rounded-xl p-2" >
            <img className="w-full sm:h-48 rounded-xl" src={CARD_IMG + cloudinaryImageId}/> 
              <div className="restorInfo p-3">
                  <h2 className="font-bold text-lg ">{name}</h2>
                  <h4 className="font-bold flex items-center"> <FaStar/>{avgRating} • {deliveryTime}</h4>
                  <p className="text-gray-600 font-semibold">{cuisines.join(' ,')}</p>
              </div>  
             
          </div>
        
      )
  }

  export default Card