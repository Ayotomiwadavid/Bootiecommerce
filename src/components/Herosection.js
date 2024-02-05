import React from 'react'
import heroeSectionShoe from "../images/heroeSectionShoe.png"

function Herosection() {
  return (
    <section className='heroSection'>
    <div className='heroIntro'>
        <p className='heroHeadingText'>trending of the week</p>
        <h1 className='heroProductName'>casual shoes for men</h1>
        <div className='heroBtnContainer'>
            <button className='btn shopNow'>shop now</button>
            <button className='btn readMore'>read more</button>
        </div>
    </div>
    <div className='heroImageContainer'>
        <img src={heroeSectionShoe}/>
    </div>
    </section>
  )
}

export default Herosection