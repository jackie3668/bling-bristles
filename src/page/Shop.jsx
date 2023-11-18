import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/Popular'
import Offers from '../component/offers/Offers'
import Feature from '../component/feature/Feature'
import NewCollections from '../component/newcollections/NewCollections'
import NewsLetter from '../component/newsletter/NewsLetter'
import ScrollingBar from '../component/scrollingbar/ScrollingBar'

const Shop = () => {
  return (
    <div>
      <Hero />
      <ScrollingBar />
      <Feature />
      <Popular />
      <Offers />
      <ScrollingBar />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop