import { createSlice } from "@reduxjs/toolkit";
import { createCheckoutSession } from "../payment/PaymentThunk";

interface PaymentState {
  checkoutUrl: string | null;
  error: string | null;
}

const initialState: PaymentState = {
  checkoutUrl: null,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    clearPaymentState: (state) => {
      state.checkoutUrl = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCheckoutSession.fulfilled, (state, action) => {
        state.checkoutUrl = action.payload.url;
        state.error = null;
      })
      .addCase(createCheckoutSession.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { clearPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;
