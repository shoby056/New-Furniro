import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductComparison from './ProductComparison/ProductComparison'
import ShopHero from '../Shop/ShopHero/ShopHero'
import ShopFeatures from '../Shop/ShopFeatures/ShopFeatures'
import Footer from '../../components/Footer/Footer'

const Comparison = () => {
  return (
    <div>
      <Navbar/>
      <ShopHero
  title="Comparison"
  breadcrumb="Comparison"
  showLogo={true}
/>
<ProductComparison/>
<ShopFeatures/>
<Footer/>


    </div>
  )
}

export default Comparison
