import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Admin/AdminSlice/ProductSlice"; // tumhara slice path

export const store = configureStore({
  reducer: {
    products: productReducer,
    // agar future me aur slices add karne ho to yahi add kar sakte ho
  },
});

// 🔹 TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
