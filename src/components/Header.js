import React, { useState } from 'react'
import Logo from "./logo"
import Navitem from './Navitem'
import './header.css'

function Header() {
  let [showSidebar, setShowSidebar] = useState(false)
  let handleClick = () =>{
    setShowSidebar(!showSidebar);
  }
  return (
    <header className='header'>
    <Logo />
    <Navitem 
      showSidebar={showSidebar}
    />
    <i className={showSidebar ? 'fa fa-times menuIcon': 'fa fa-bars menuIcon'} onClick={handleClick}></i>
    </header>
  )
}

export default Header