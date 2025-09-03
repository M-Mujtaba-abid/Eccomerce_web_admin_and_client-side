import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../apiInstance";

// Add item to cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }: { productId: number; quantity: number }, { rejectWithValue }) => {
    try {
      const response = await API.post(`/cartitem/addtocart/${productId}`, {
        quantity,
      });
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to add item to cart");
    }
  }
);

// Get all cart items
export const getUserCart = createAsyncThunk(
  "cart/getUserCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/cartitem/getallcartproduct");
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch cart");
    }
  }
);

// Update cart item quantity
export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ id, quantity }: { id: number; quantity: number }, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/cartitem/updatecart/${id}`, {
        quantity,
      });
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to update cart item");
    }
  }
);

// Remove cart item
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (id: number, { rejectWithValue }) => {
    try {
      await API.delete(`/cartitem/deletecartitem/${id}`);
      return id; // Return the ID to remove from state
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to remove cart item");
    }
  }
);

// Clear all cart items
export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    try {
      await API.delete("/cartitem/deletcart");
      return {};
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to clear cart");
    }
  }
);
