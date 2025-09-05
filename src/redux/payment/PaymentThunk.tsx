import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../redux/apiInstance";
import { showLoader, hideLoader } from "../LoaderSlice";

// 🔹 Stripe Checkout Session
export const createCheckoutSession = createAsyncThunk(
  "payment/createCheckoutSession",
  async (
    items: { name: string; price: number; quantity: number }[],
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(showLoader());
      const response = await API.post("/payment/create-checkout-session", { items });
      return response.data; // { url }
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Checkout session failed");
    } finally {
      dispatch(hideLoader());
    }
  }
);


// 🔹 Get Checkout Session by ID
export const getCheckoutSession = createAsyncThunk(
  "payment/getCheckoutSession",
  async (sessionId: string, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await API.get(`/payment/sessionsuccess/${sessionId}`);
      return response.data; // Stripe session object
    } catch (error: any) {
      return rejectWithValue(
        
        error.response?.data?.message || "Failed to fetch session"
      );
    } finally {
      dispatch(hideLoader());
    }
  }
);