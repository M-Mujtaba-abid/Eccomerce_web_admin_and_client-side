
// src/pages/Admin/Dashboard.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalProductsCount } from "../../redux/Admin/AdminThunk/ProductThunk";
import { fetchTotalOrders } from "../../redux/Admin/AdminThunk/OrderThunk";
import { fetchTotalUsers } from "../../redux/auth/AuthThunk";
import type { RootState, AppDispatch } from "../../redux/store";
import Logout from "../../auth/Logout";

// Recharts Imports
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { totalProductsCount } = useSelector((state: RootState) => state.products);
  const { totalOrders } = useSelector((state: RootState) => state.order);
  const { totalUsers } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getTotalProductsCount());
    dispatch(fetchTotalOrders());
    dispatch(fetchTotalUsers());
  }, [dispatch]);

  // 🔹 Chart Data
  const statsData = [
    { name: "Users", value: totalUsers },
    { name: "Products", value: totalProductsCount },
    { name: "Orders", value: totalOrders },
  ];

  const COLORS = ["#4f46e5", "#22c55e", "#facc15"];

  return (
    <div className="space-y-6 p-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 ml-10 md:ml-0 dark:text-white">
            Dashboard
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Welcome to dashboard
          </p>
        </div>
        <Logout />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* ✅ Total Users */}
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-colors">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{totalUsers}</p>
        </div>

        {/* Total Products */}
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-colors">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Products</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{totalProductsCount}</p>
        </div>

        {/* Total Orders */}
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-colors">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Orders</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{totalOrders}</p>
        </div>

        {/* Revenue */}
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-colors">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Revenue</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">$12,345</p>
        </div>
      </div>

      {/* 🔹 Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Stats Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statsData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {statsData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
