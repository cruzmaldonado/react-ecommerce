import axios from 'axios'
import React, { useState } from 'react'
import './styles/productDescription.css'
import getConfig from '../../utils/getConfig'


const ProductDescription = ({productInfo}) => {

  const [counter, setCounter] = useState(1)
  const [carousel, setCarousel] = useState(1)
  
  const handlePlus = () => setCounter(counter + 1)

  const handleMinus = () => {
    if(counter - 1 >= 1){
      setCounter(counter - 1)
    }
  }
    const handleCarouselMinus=()=>{
        if(carousel-1>=1){
          setCarousel(carousel-1)
          
        }
    }
    const handleCarouselPlus=()=>{
      if(carousel+1<=3){
        setCarousel(carousel+1)
       
      }
  }


  
  const handleAddCart= () => {
    const URL="https://ecommerce-api-react.herokuapp.com/api/v1/cart"
    const onj={
      id:productInfo.id,
      quantity:counter
    }
    axios.post(URL,obj,getConfig())
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }

  return (
    <section className='product-info'>
      <div className='product-info__pictures'>
        <button className='product-info__quantity-btn' onClick={handleCarouselPlus}>&#62;</button>
      <ul className='slice'>
        {/* los botones cambian el carrusel ,con el estado carousel se ve cual es debe ser mostrado,
        acomodar luego */}
        <li ><img  src={productInfo?.productImgs[0]} alt="" /></li>
        <li ><img  src={productInfo?.productImgs[1]} alt="" /></li>
        <li ><img  src={productInfo?.productImgs[2]} alt="" /></li>
      </ul>
      <div></div>
      <button  className='product-info__quantity-btn' onClick={handleCarouselMinus}>&#60;</button>
      


      </div>
      <h2 className='product-info__name'>{productInfo?.title}</h2>
      <p className='product-info__description'>{productInfo?.description}</p>
      <div className='product-info__body'>
        <article className='product-info__price'>
          <h3 className='product-info__price-label'>Price</h3>
          <span className='product-info__price-value'>&#36;{productInfo?.price}</span>
        </article>
        <article className='product-info__quantity'>
          <h3 className='product-info__quantity-label'>Quantity</h3>
          <div className='product-info__quantity-product'>
            <button className='product-info__quantity-btn' onClick={handleMinus}>-</button>
            <div className='product-info__quantity-form'>{counter}</div>
            <button className='product-info__quantity-btn' onClick={handlePlus}>+</button>
          </div>
        </article>
      </div>
      <button onClick={handleAddCart} className='product-info__btn-cart'>Add to cart </button>
      <hr />
    </section>
  )
}

export default ProductDescription

