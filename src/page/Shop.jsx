import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/Popular'
import Offers from '../component/offers/Offers'
import Feature from '../component/feature/Feature'
import NewCollections from '../component/newcollections/NewCollections'
import Footer from '../component/footer/Footer'
import NewsLetter from '../component/newsletter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Shop