import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import ShopHero from './ShopHero/ShopHero';
import ShopFilter from './ShopFilter/ShopFilter';


import Products from '../../components/Products/Products';
import Pagination from './Pagination/Pagination';
import ShopFeatures from './ShopFeatures/ShopFeatures';
import Footer from '../../components/Footer/Footer';


const Shop = () => {
  return (
    <div>
       <Navbar/>
       <ShopHero/>
       <ShopFilter/>
       <Products
  showHeading={false}
  showButton={false}
/>
 <Products
  showHeading={false}
  showButton={false}
/>
 <Products
  showHeading={false}
  showButton={false}
/>
<Pagination/>

<ShopFeatures/>
<Footer/>

    </div>
  )
}

export default Shop
