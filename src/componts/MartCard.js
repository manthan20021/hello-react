import React from 'react'
import { MART_CARD_IMG } from '../utils/Consten'

function MartCard() {
  return (
    <div className='mart-card'>
      <img src={MART_CARD_IMG}/>
      <h3>product Name</h3>
      <p>this is the discripton
        for this product.ther is 
        a extra informetion about 
        this product
      </p>
      <h3>Rs.200</h3>
    </div>
  )
}

export default MartCard
