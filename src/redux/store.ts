import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Admin/AdminSlice/ProductSlice"; // tumhara slice path
import userReducer from "./auth/AuthSlice"; // tumhara slice path
import cartReducer from "./user/cart/CartSlice"; // cart slice path

export const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
    cart: cartReducer, // cart reducer added
    // agar future me aur slices add karne ho to yahi add kar sakte ho
  },
});

// 🔹 TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
