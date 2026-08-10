import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ShopHero from '../Shop/ShopHero/ShopHero'
import ContactForm from './ContactForm/ContactForm'
import ShopFeatures from '../Shop/ShopFeatures/ShopFeatures'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ShopHero
  title="Contact"
  breadcrumb="Contact"
  showLogo={true}
/>
<ContactForm/>
<ShopFeatures/>
<Footer/>

    </div>
  )
}

export default Contact
