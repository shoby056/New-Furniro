import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Comparison from "./pages/Comparison/Comparison";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
       <Route
  path="/SingleProduct/:id"
  element={<SingleProduct />}
/>
 <Route path="/Cart" element={<Cart />} />
 <Route path="/Checkout" element={<Checkout />} />
  <Route path="/Contact" element={<Contact />} />
   <Route path="/Blog" element={<Blog />} />
   <Route path="/Comparison" element={<Comparison />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;