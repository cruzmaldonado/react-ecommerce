import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import { PurchaseCart } from '../purchases/PurchaseCart'


const Purchases = () => {
  const [purchases, setPurchase] = useState()
  useEffect(() => {
    const URL='https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    axios.get(URL,getConfig())
    .then(res=>setPurchase(res.data.data.purchases))
    .catch(err=>console.log(err))
  }, [])
  
  return (
    <div>
    <h2>purchase</h2>
   <div>
      {
        purchases?.map(purchase=>(
          <PurchaseCart
          key={purchase.id}
          purchase={purchase}
          />
          
          ))
        }
    </div>
        </div>
  )
}

export default Purchases