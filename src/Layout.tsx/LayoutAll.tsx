
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../admin_side/shared/AdminLoyout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import WebSiteLayout from "../user_side/webLayout/WebSiteLayout";
import ProtectedRoute from "./ProtectedRoute";

// Admin pages
import Dashboard from "../admin_side/shared/Dashboard";
import PostProduct from "../admin_side/pages/product/PostProduct";
import ListProduct from "../admin_side/pages/product/ListProduct";
import ProductDetailPage from "../admin_side/pages/product/ProductDetailPage";

// User/Web pages
import Home from "../user_side/pages/Home";
import About from "../user_side/pages/About";
import ContactUs from "../user_side/pages/ContactUs";
import Products from "../user_side/pages/Products";
import UserProductDetailPage from "../user_side/pages/ProductDetailPage";
import Cart from "../user_side/pages/cart/Cart";
import CheckOut from "../user_side/pages/cart/CheckOut";

import ScrollToTop from "../utils/ScrollToTop";
import AllProductsRender from "../user_side/pages/AllProductsRender";
import ThankYouContent from "../user_side/pages/cart/ThankYouContent";
import MyOrders from "../user_side/pages/cart/oder/MyOrders";
import SearchResults from "../user_side/component/SearchResults";

const LayoutAll = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      {/* ✅ Admin routes - nested under /admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="Admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="product" element={<PostProduct />} />
        <Route path="product/:productId" element={<PostProduct />} />
        <Route path="products" element={<ListProduct />} />
        <Route path="product-detail/:productId" element={<ProductDetailPage />} />
      </Route>

      {/* ✅ User/Web routes - nested under /web */}
      <Route
        path="/web"
        element={
          <ProtectedRoute role="User">
            <WebSiteLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path=":category" element={<Products />} />
        <Route path="product-detail/:productId" element={<UserProductDetailPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="all-products" element={<AllProductsRender />} />
        <Route path="thankyou" element={<ThankYouContent/>}/>
        <Route path="myorders" element={<MyOrders/>}/>
        <Route path="/web/search" element={<SearchResults />} />


      </Route>

      {/* ✅ Public routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
      {/* ✅ Default redirect */}
      <Route path="/" element={<Login />} />
    </Routes>
    </>
  );
};

export default LayoutAll;
