import React from 'react'
import Navbar from '../components/globals/Navbar'
import Search from '../components/globals/Search'
import Slider from '../components/elements/Slider'
import Category from '../components/elements/Category'
import Tail from '../components/globals/Tail'
import ProductCard from '../components/globals/ProductCard'

const slides=[
    "https://hips.hearstapps.com/hmg-prod/images/gh-office-gadgets-66042b2e9168c.png?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    "https://hips.hearstapps.com/hmg-prod/images/gh-office-gadgets-66042b2e9168c.png?crop=0.888888888888889xw:1xh;center,top&resize=1200:",
    "https://hips.hearstapps.com/hmg-prod/images/gh-office-gadgets-66042b2e9168c.png?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    "https://hips.hearstapps.com/hmg-prod/images/gh-office-gadgets-66042b2e9168c.png?crop=0.888888888888889xw:1xh;center,top&resize=1200:",
    
]

function Landing() {
  return (
    <div>
        <Navbar/>
        <Search/>
        <div className='w-[60%] m-auto'>
            <Slider slides={slides}/>
        </div>
        <Category/>
        <ProductCard/>
        <Tail/>
    </div>
  )
}

export default Landing