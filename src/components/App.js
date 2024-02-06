import React from "react";
import Header from "./Header";
import Herosection from "./Herosection";
import Tipscontainer from "./Tipscontainer";
import Newarrivals from "./Newarrivals";
import Reviewsection from "./Reviewsection";
import Popularsection from "./Popularsection";
import Brandicon from "./Brandicon";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Productsection from "./pages/Productsection";
import Pagenotfound from "./pages/Pagenotfound";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/products" element={<Productsection />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="*" element={<Pagenotfound />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
