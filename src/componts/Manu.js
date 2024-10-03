import Shimar from "./Shimar"
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa6"
import { FaRupeeSign } from "react-icons/fa";
import useManuInfo from "../utils/useManuInfo"


const Manu = () => {

const {resid} = useParams();
const resManuInfo = useManuInfo(resid); //<-- costum hook for fetching the res-Manu-Data

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

//console.log(resManuInfo?.data?.cards );

//   let {
//     itemCards
// } 
// = resManuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]

    let {
        itemCards
    } = resManuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    return <div className="manuBody">
           <div className="subManuBody">
           <h2>{name}</h2>
            <div className="manuInfoContenar">
            <div>
                <h4> <span id="redingBg"><FaStar/> {avgRatin}</span> ({totalRatingsString}) {costForTwoMessage}</h4>
                <h5 id="cuisines">{cuisines}</h5>
              <div className="groop-of-area-deliviery-time">
                <div className="meargeicon">
                    <div className="c-1"></div>
                    <div className="line"></div>
                    <div className="c-2"></div>
                 </div>
          <div>
          <p id="areaName"> <span id="Outlet">Outlet:      </span>{areaName}</p>
          <p id="deliverytime">{minDeliveryTime} - {maxDeliveryTime} mins</p>
          
          </div>
              </div>
                </div> 
            </div>
              <div className="list-of-manu">
              {
              
              itemCards.map( items =>   <li
                key={items.card.info.id}
                > {console.log(items)}
                
                 <h3>{items.card.info.name}</h3>
                    {
                    items.card.info.defaultPrice?(
                    <h3><FaRupeeSign />:{items.card.info.defaultPrice / 100}</h3>
                 ) : (
                     <h3><FaRupeeSign />:{items.card.info.price / 100} </h3> 
                    )
                 }
                 <p>{items.card.info.description}</p>
                <button>ADD</button>
 
                </li>)
                }
                </div> 

           </div>
        </div>
    
}

export default Manu


// {items.card.info.defaultPrice / 100}

//resManuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0] || {}