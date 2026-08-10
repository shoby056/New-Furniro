import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ShopHero from '../Shop/ShopHero/ShopHero'
import CheckoutForm from './CheckoutForm/CheckoutForm'
import ShopFeatures from '../Shop/ShopFeatures/ShopFeatures'
import Footer from '../../components/Footer/Footer'

const Checkout = () => {
  return (
    <div>
      
 <Navbar/>

<ShopHero
  title="Checkout"
  breadcrumb="Checkout"
  showLogo={true}
/>
<CheckoutForm/>

<ShopFeatures/>
<Footer/>


    </div>
  )
}

export default Checkout
