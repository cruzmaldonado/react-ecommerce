import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import './styles/home.css'
import InputSearch from "../home/InputSearch"

const Home = () => {

  const [inputSearch, setInputSearch] = useState("")
  const [filterProduct, setFilterProduct] = useState()

  const products = useSelector(state => state.products)
  
  useEffect(() => {
    const filter=products?.filter(e=>e.title.toLowerCase()
    .includes(inputSearch.toLowerCase()))
    setFilterProduct(filter)
  
    
  }, [inputSearch])
  
  
  
  console.log(inputSearch)



  return (
    <main className='home'>
      <InputSearch setInputSearch={setInputSearch}/>
      <div className='home__container-card'>
        {
          products?.map(product => (
            <CardHome 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home