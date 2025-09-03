// import React from 'react'

import { Outlet, useLocation } from "react-router-dom"
import Carousel from "../component/Carosel"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import CartModal from "../pages/cart/CArtModel"
// import GlobalLoader from "../component/GlobalLoader"

const WebSiteLayout = () => {
  const location = useLocation();
  // console.log('WebSiteLayout rendering, current location:', location.pathname);
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* WebSiteLayout */}
      <Navbar/>
      
      {/* Carousel for all pages */}
      {location.pathname === "/web" && <Carousel />}
      
      
      <div className="container mx-auto  ">
        <Outlet /> {/* ✅ yahan child routes render honge */}
      </div>
      
      <Footer/>
      
      {/* Global Loader */}
      {/* <GlobalLoader /> */}
      {/* Cart Modal - Global */}
      <CartModal />
    </div>
  )
}

export default WebSiteLayout
