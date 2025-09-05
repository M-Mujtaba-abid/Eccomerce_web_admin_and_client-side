// import { Routes, Route } from "react-router-dom";
// import AdminLayout from "../admin_side/shared/AdminLoyout";
// import Login from "../auth/Login";
// import Register from "../auth/Register";
// import WebSiteLayout from "../user_side/webLayout/WebSiteLayout";
// import ProtectedRoute from "./ProtectedRoute";

// // Admin pages
// import Dashboard from "../admin_side/shared/Dashboard";
// import PostProduct from "../admin_side/pages/product/PostProduct";
// import ListProduct from "../admin_side/pages/product/ListProduct";
// import ProductDetailPage from "../admin_side/pages/product/ProductDetailPage";

// // User/Web pages
// import Home from "../user_side/pages/Home";
// import About from "../user_side/pages/About";
// import ContactUs from "../user_side/pages/ContactUs";
// import Products from "../user_side/pages/Products";
// import UserProductDetailPage from "../user_side/pages/ProductDetailPage";
// import Cart from "../user_side/pages/cart/Cart";
// import CheckOut from "../user_side/pages/cart/CheckOut";

// import ScrollToTop from "../utils/ScrollToTop";
// import AllProductsRender from "../user_side/pages/AllProductsRender";
// import ThankYouContent from "../user_side/pages/cart/ThankYouContent";
// import MyOrders from "../user_side/pages/cart/oder/MyOrders";
// import SearchResults from "../user_side/component/SearchResults";

// const LayoutAll = () => {
//   return (
//     <>
//       <ScrollToTop />
//       <Routes>
//         {/* ✅ Admin routes - nested under /admin */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute role="Admin">
//               <AdminLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Dashboard />} />
//           <Route path="product" element={<PostProduct />} />
//           <Route path="product/:productId" element={<PostProduct />} />
//           <Route path="products" element={<ListProduct />} />
//           <Route
//             path="product-detail/:productId"
//             element={<ProductDetailPage />}
//           />
//         </Route>

//         {/* ✅ User/Web routes - nested under /web */}
//         <Route
//           path="/web"
//           element={
//             // <ProtectedRoute role="User">
//               <WebSiteLayout />
//             // </ProtectedRoute>
//           }
//         >
//           <Route index element={<Home />} />
//           <Route path="home" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path=":category" element={<Products />} />
//           <Route path="contact" element={<ContactUs />} />
//           <Route
//             path="product-detail/:productId"
//             element={<UserProductDetailPage />}
//           />
//           <Route path="cart" element={<Cart />} />
//           <Route path="checkout" element={<CheckOut />} />
//           <Route path="all-products" element={<AllProductsRender />} />
//           <Route path="thankyou" element={<ThankYouContent />} />
//           <Route path="myorders" element={<MyOrders />} />
//           <Route path="/web/search" element={<SearchResults />} />
//         </Route>

//         {/* ✅ Public routes */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         {/* ✅ Default redirect */}
//         <Route path="/web" element={<WebSiteLayout />} />
//       </Routes>
//     </>
//   );
// };

// export default LayoutAll;



import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import ProtectedRoute from "./ProtectedRoute";

// Layouts
import AdminLayout from "../admin_side/shared/AdminLoyout";
import WebSiteLayout from "../user_side/webLayout/WebSiteLayout";

// Auth pages
import Login from "../auth/Login";
import Register from "../auth/Register";

// Admin pages
import Dashboard from "../admin_side/shared/Dashboard";
import PostProduct from "../admin_side/pages/product/PostProduct";
import ListProduct from "../admin_side/pages/product/ListProduct";
import ProductDetailPage from "../admin_side/pages/product/ProductDetailPage";

// Web/User pages
import Home from "../user_side/pages/Home";
import About from "../user_side/pages/About";
import ContactUs from "../user_side/pages/ContactUs";
import Products from "../user_side/pages/Products";
import UserProductDetailPage from "../user_side/pages/ProductDetailPage";
import Cart from "../user_side/pages/cart/Cart";
import CheckOut from "../user_side/pages/cart/CheckOut";
import AllProductsRender from "../user_side/pages/AllProductsRender";
import ThankYouContent from "../user_side/pages/cart/ThankYouContent";
import MyOrders from "../user_side/pages/cart/oder/MyOrders";
import SearchResults from "../user_side/component/SearchResults";
import OrderDirectory from "../admin_side/pages/order/OrderDirectory";
import OrderDetails from "../admin_side/pages/order/Orderdetails";
import Success from "../payment/Success";
import Cancel from "../payment/Cancel";
import { Toaster } from "react-hot-toast";

const LayoutAll = () => {
  return (
    <>
     <Toaster position="top-right" />
      <ScrollToTop />
      <Routes>
        {/* ---------------------- Admin Routes ---------------------- */}
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
          <Route path="orders" element={<OrderDirectory />} />
          <Route path="orders/:id" element={<OrderDetails />} />
        </Route>

        {/* ---------------------- Web/User Routes ---------------------- */}
        <Route path="/web" element={<WebSiteLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path=":category" element={<Products />} />
          <Route path="product-detail/:productId" element={<UserProductDetailPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="all-products" element={<AllProductsRender />} />
          <Route path="thankyou" element={<ThankYouContent />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="success/:id" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Route>

        {/* ---------------------- Auth/Public Routes ---------------------- */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ---------------------- Default redirect / → /web ---------------------- */}
        <Route path="/" element={<Navigate to="/web" replace />} />
      </Routes>
    </>
  );
};

export default LayoutAll;
