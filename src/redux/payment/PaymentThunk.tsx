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
