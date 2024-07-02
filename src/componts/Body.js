import React from "react"
import RESTAURANT_LIST from "../utils/data"
import Card from "./Card"

const Body = () => {

    return(
        <div className="bodyLeout">
        <div className="cardContenar">
          {
            RESTAURANT_LIST.map(restaurantElement => {
              return(
                <Card key={restaurantElement.info.id} resData = {restaurantElement} />
              )
            })
          }
          
        </div>
        </div> 
    )
}

export default Body