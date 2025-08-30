import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import PostProduct from "../pages/product/PostProduct";
import ListProduct from "../pages/product/ListProduct";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import ThemeToggle from "../../ThemeToggle";

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-[250px] bg-gray-800 text-white dark:bg-gray-900 p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        {/* Theme Toggle Button */}
        <div className="mb-6">
          <ThemeToggle />
        </div>

        {/* Sidebar Links */}
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 text-gray-900 dark:text-white transition-colors">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<PostProduct />} />
          <Route path="/product/:productId" element={<PostProduct />} /> {/* Unified route for create/edit */}
          <Route path="/products" element={<ListProduct />} />
          <Route path="/product-detail/:productId" element={<ProductDetailPage />} /> {/* New detail page route */}
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
