// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "../../../redux/store";
// import { fetchAllOrders } from "../../../redux/Admin/AdminThunk/OrderThunk";
// import { useNavigate } from "react-router-dom";

// const OrderDirectory: React.FC = () => {
//   const dispatch = useDispatch<any>();
//   const navigate = useNavigate();

//   const { orders } = useSelector((state: RootState) => state.order);
//   const { loading } = useSelector((state: RootState) => state.loader);
//   const { theme } = useSelector((state: RootState) => state.theme || { theme: "light" });

//   useEffect(() => {
//     dispatch(fetchAllOrders());
//   }, [dispatch]);

//   const handleViewDetails = (id: number) => {
//     navigate(`/admin/orders/${id}`);
//   };

//   return (
//     <div className={`p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
//       <h1 className="text-2xl font-semibold mb-4">All Orders</h1>

//       {loading && (
//         <div className="flex justify-center items-center py-10">
//           <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
//         </div>
//       )}

//       {!loading && orders.length === 0 && <p>No orders found.</p>}

//       {!loading && orders.length > 0 && (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300">
//             <thead className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
//               <tr>
//                 <th className="px-4 py-2 border">Order ID</th>
//                 <th className="px-4 py-2 border">Username</th>
//                 <th className="px-4 py-2 border">Email</th>
//                 <th className="px-4 py-2 border hidden md:table-cell">Total Items</th>
//                 <th className="px-4 py-2 border">Status</th>
//                 <th className="px-4 py-2 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order: any) => (
//                 <tr
//                   key={order.id}
//                   className={`hover:bg-gray-50 ${
//                     theme === "dark" ? "hover:bg-gray-700" : ""
//                   }`}
//                 >
//                   <td className="px-4 py-2 border">{order.id}</td>
//                   <td className="px-4 py-2 border">{order.customerName}</td>
//                   <td className="px-4 py-2 border">{order.customerEmail}</td>
//                   <td className="px-4 py-2 border hidden md:table-cell">
//                     {order.OrderItems?.length || 0}
//                   </td>
//                   <td className="px-4 py-2 border">{order.status}</td>
//                   <td className="px-4 py-2 border">
//                     <button
//                       onClick={() => handleViewDetails(order.id)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                     >
//                       View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderDirectory;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { fetchAllOrders } from "../../../redux/Admin/AdminThunk/OrderThunk";
import { useNavigate } from "react-router-dom";

const OrderDirectory: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const { orders } = useSelector((state: RootState) => state.order);
  const { loading } = useSelector((state: RootState) => state.loader);
  const { theme } = useSelector((state: RootState) => state.theme || { theme: "light" });

  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  const handleViewDetails = (id: number) => {
    navigate(`/admin/orders/${id}`);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
  };

  // Filter orders based on selected status
  const filteredOrders =
    filterStatus === "all" ? orders : orders.filter((order: any) => order.status === filterStatus);

  return (
    <div className={`p-2 pt-14 lg:p-9 min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <h1 className="text-2xl font-semibold mb-4">All Orders</h1>

      {/* Status Filter */}
      <div className="mb-4 flex items-center gap-3">
        <span className="font-semibold">Filter by Status:</span>
        <select
          value={filterStatus}
          onChange={handleFilterChange}
          className={`px-3 py-1 rounded border ${theme === "dark" ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-10">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {!loading && filteredOrders.length === 0 && <p>No orders found.</p>}

      {!loading && filteredOrders.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
              <tr>
                <th className="px-4 py-2 border">Order ID</th>
                <th className="px-4 py-2 border hidden md:table-cell">Username</th>
                <th className="px-4 py-2 border hidden md:table-cell">Email</th>
                <th className="px-4 py-2 border hidden md:table-cell">Total Items</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order: any) => (
                <tr
                  key={order.id}
                  className={`hover:bg-gray-50 ${theme === "dark" ? "hover:bg-gray-700" : ""}`}
                >
                  <td className="px-4 py-2 border">{order.id}</td>
                  <td className="px-4 py-2 border hidden md:table-cell">{order.customerName}</td>
                  <td className="px-4 py-2 border hidden md:table-cell">{order.customerEmail}</td>
                  <td className="px-4 py-2 border hidden md:table-cell">{order.OrderItems?.length || 0}</td>
                  <td className="px-4 py-2 border">{order.status}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleViewDetails(order.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderDirectory;
