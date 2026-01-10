import React from 'react'
import Header from '../../component/Page_rootlayout/Headder/Header'
import Navbar from '../../component/Page_rootlayout/Nav bar/Navbar'
import HomepageHero from '../../component/Home page component/HomepageHero'
import FlashSales from '../../component/Home page component/FlashSales'
const Home = () => {
  return (
   <>
  <div>
    <Header />
    <Navbar />
    <HomepageHero />
    <FlashSales />
  </div>
   </>
  )
}

export default Home