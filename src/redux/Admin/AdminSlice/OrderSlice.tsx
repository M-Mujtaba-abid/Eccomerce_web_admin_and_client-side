// src/redux/OrderSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { createOrder, fetchMyOrders, updateOrderStatus, deleteOrder } from "../../Admin/AdminThunk/OrderThunk";

interface OrderState {
  orders: any[];
  order: any | null;
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: OrderState = {
  orders: [],
  order: null,
  loading: false,
  error: null,
  success: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrderError: (state) => {
      state.error = null;
    },
    clearOrderSuccess: (state) => {
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    // ========================
    // 🔹 Create Order
    // ========================
    builder.addCase(createOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload.data;
      state.orders.push(action.payload.data);
      state.success = "Order created successfully";
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // ========================
    // 🔹 Fetch Orders
    // ========================
    builder.addCase(fetchMyOrders.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMyOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
    builder.addCase(fetchMyOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // ========================
    // 🔹 Update Order Status
    // ========================
    builder.addCase(updateOrderStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
      state.loading = false;
      const updated = action.payload.data;
      state.orders = state.orders.map((o) => (o.id === updated.id ? updated : o));
      state.success = "Order status updated successfully";
    });
    builder.addCase(updateOrderStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // ========================
    // 🔹 Delete Order
    // ========================
    builder.addCase(deleteOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = state.orders.filter((o) => o.id !== action.payload.id);
      state.success = "Order deleted successfully";
    });
    builder.addCase(deleteOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { clearOrderError, clearOrderSuccess } = orderSlice.actions;
export default orderSlice.reducer;
