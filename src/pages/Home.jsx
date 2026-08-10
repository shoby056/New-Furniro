import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Inspirations from "../components/Inspirations/Inspirations";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Inspirations />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;