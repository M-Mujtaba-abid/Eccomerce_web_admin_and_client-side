

// import React from "react";

// import { useNavigate } from "react-router-dom";

// const Cancel = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white px-4">
//       <h1 className="text-4xl font-bold mb-4 text-red-500">Payment Canceled</h1>
//       <p className="mb-6 text-center">
//         Your payment was not completed. Your cart has not been changed.
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4">
//         <button
//           onClick={() => navigate("/web/cart")}
//           className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
//         >
//           Return to Cart
//         </button>
//         <button
//           onClick={() => navigate("/web")}
//           className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cancel;



// src/user_side/pages/cart/Cancel.tsx
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cancelCheckoutSession } from "../redux/payment/PaymentThunk"; // correct path
import type { AppDispatch } from "../redux/store"; // typed dispatch

const Cancel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // ✅ typed dispatch
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Get sessionId from URL if available
    const sessionId = searchParams.get("session_id");

    if (sessionId) {
      // Dispatch the cancel thunk safely
      dispatch(cancelCheckoutSession(sessionId));
    }
  }, [dispatch, searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white px-4">
      <h1 className="text-4xl font-bold mb-4 text-red-500">Payment Canceled</h1>
      <p className="mb-6 text-center">
        Your payment was not completed. Your cart has not been changed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/web/cart")}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          Return to Cart
        </button>
        <button
          onClick={() => navigate("/web")}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cancel;
