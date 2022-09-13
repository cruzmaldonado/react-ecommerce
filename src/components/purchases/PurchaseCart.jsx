import React from 'react'
import { ProductPurchase } from './ProductPurchase'

export const PurchaseCart = ({purchase}) => {
  return (
    <article className='card-purchase'>
      <h3 className='card-purchase'>{purchase.createAt}</h3>
        <div className='card.purchase__body'>
          {
            purchase.cart.products.map(product=>(
              <ul>
                <ProductPurchase
              key={product.id}
              product={product}/>
              </ul>
            ))
          }
        </div>
    </article>
  )
}
