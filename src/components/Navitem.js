import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';

function Navitem() {
  return (
    <ul className='navList'>
    <Link className='navlink active' to='/'><li className='listItem'>home</li></Link>
    <Link className='navlink' to='/about'><li className='listItem'>about</li></Link>
    <Link className='navlink' to='/blog'><li className='listItem'>blog</li></Link>
    <Link className='navlink' to='/contact'><li className='listItem'>contact</li></Link>
    <ul className='listItem'>categories
    </ul>
    </ul>
  )
}

export default Navitem