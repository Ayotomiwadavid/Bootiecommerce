import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';

function Navitem(props) {
  let showSidebar = props.showSidebar;
  return (
    <ul className='navList' style={{right: showSidebar ? "0" : "-100%"}}>
    <Link className='navlink' to='/'><li className='listItem'>home</li></Link>
    <Link className='navlink' to='/about'><li className='listItem'>about</li></Link>
    <Link className='navlink' to='/blog'><li className='listItem'>blog</li></Link>
    <Link className='navlink' to='/contact'><li className='listItem'>contact</li></Link>
    <li className='listItem categorybutton'>dropdown
      <ul className='subNavLinkCont'>
        <Link className='navlink' to='/product'><li className='subNavLink'>product</li></Link>
        <Link className='navlink' to='/cart'><li className='subNavLink'>cart</li></Link>
        <Link className='navlink' to='/signup'><li className='subNavLink'>sign up</li></Link>
        <Link className='navlink' to='/signin'><li className='subNavLink'>sign in</li></Link>
      </ul>
    </li>
    </ul>
  )
}

export default Navitem