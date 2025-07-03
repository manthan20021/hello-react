import React,{useState} from "react"
import ItemCategoryBody from "./ItemCategoryBody"

const ItemCategory = ({categoryData, togelItemCards, setShowIndex}) => {
   
   const [categoriesArr] = useState([categoryData])



   const togelClick = () => {
    setShowIndex();
}
         return(
            <div key={categoriesArr[0]?.title}>
                
                    <div  className="sm:w-full h-auto sm:px-5 sm:py-3 px-3 py-1 rounded-lg w-[400px] bg-slate-200 mb-3 sm:mb-4 ">            
               <div  onClick={togelClick}  className="acordian-hade w-full flex justify-between cursor-pointer">
                <h1  className="font-bold text-1xl">{categoriesArr[0]?.title}<span>({categoriesArr[0]?.itemCards?.length})</span></h1>
                       {togelItemCards?<div>⬆️</div>:<div>⬇️</div>}
                      
                        </div> 
                        
                        {
                            togelItemCards && <ItemCategoryBody key={categoriesArr?.title} itemCardsBodyData={categoriesArr}/>
                           
                            
                        }
                    </div> 
            </div>
         )

    
    }
    


export default ItemCategory
