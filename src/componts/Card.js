import {CARD_IMG} from "../utils/imges";
import React from "react";
import { FaStar } from "react-icons/fa6";


const Card = (props) => {
    const {resData} = props;
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId
    } = resData?.info
    
    const {deliveryTime} = resData.info.sla
  
      return(
      
      <div className="card">
            <img src={CARD_IMG + cloudinaryImageId}/> 
              <div className="restorInfo">
  
                  <h2 className="res-name">{name}</h2>
                  <p>{cuisines.join(' ,')}</p>
                  <span className="avgReating"> <FaStar/>{avgRating}</span>
                  <h3>deliveryTime: {deliveryTime}</h3> 
                  <h3 id="costForTwo">{costForTwo}</h3> 
              </div>  
          </div>
      )
  }

  export default Card