import React from 'react'
import Header from '../Header'
import Tipscontainer from '../Tipscontainer'
import Newarrivals from '../Newarrivals'
import Reviewsection from '../Reviewsection'
import Popularsection from '../Popularsection'
import Brandicon from '../Brandicon'
import Herosection from '../Herosection'

const Home = () => {
  return (
    <>
      <Header />
      <Herosection />
      <Tipscontainer />
      <Newarrivals />
      <Reviewsection />
      <Popularsection />
      <Brandicon />
    </>
  )
}

export default Home