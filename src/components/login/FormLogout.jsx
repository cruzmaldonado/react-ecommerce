import React from 'react'
import './style/formLogout.css'

const FormLogout = ({isLogged, setIsLooged}) => {

  const handleClick = () => {
    setIsLooged()
    localStorage.removeItem('token')
  }

  return (
    <article className='form-logout'>
      <i className="fa-solid fa-circle-user login__i"></i>
      <h2 className='form-logout__username'>
        {`${isLogged?.firstName} ${isLogged?.lastName}`}
      </h2>
      <i className="fa-solid fa-thumbs-up form-logout__check login__i"></i>
      
      <button onClick={handleClick} className='form-logout__btn'>Logout</button>
    </article>
  )
}

export default FormLogout