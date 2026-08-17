import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BlogContent from './BlogContent/BlogContent'
import ShopHero from '../Shop/ShopHero/ShopHero'
import Pagination from '../Shop/Pagination/Pagination'
import ShopFeatures from '../Shop/ShopFeatures/ShopFeatures'
import Footer from '../../components/Footer/Footer'


const Blog = () => {
  return (
    <div>
      <Navbar/>
       <ShopHero
  title="Blog"
  breadcrumb="Blog"
  showLogo={true}
/>
<BlogContent/>
<Pagination/>
<ShopFeatures/>
<Footer/>


    </div>
  )
}

export default Blog
