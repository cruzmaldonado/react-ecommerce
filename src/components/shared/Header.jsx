import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import './styles/style.css'

const Header = () => {
  const [show, setShow] = useState(true)
  

  const handleHamClick = () =>{
    setShow(!show)
   
  }

  return (
    <div>
    <i onClick={handleHamClick} className="fa-solid fa-bars header__menu-ham "></i>
    <header className="header">
      <nav  className="header__nav " >
        <ul className={`header__list ${show? "header__menu-show":""}`}>
          <li className="header__item">
          <NavLink className='header__logo-navlink' to="/">
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>
          </li>
          <li className="header__item">
            <NavLink 
              className={({isActive}) => isActive ? 'header__navlink active-link': 'header__navlink'} 
              to="/login"
              >
             <i className="fa-solid fa-user"></i>
            </NavLink>
          </li>
          <li className=  "header__item">
            <NavLink 
              className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'}
              to="/purchases"
              >
              <i className="fa-solid fa-box-archive"></i>
            </NavLink>
          </li>
          <li className="header__item">
          <NavLink 
              className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'}
              to="/cart"
              >
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  </div>
  );
};

export default Header;
