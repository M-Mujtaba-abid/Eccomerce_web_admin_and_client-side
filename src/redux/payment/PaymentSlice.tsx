// import { createSlice } from "@reduxjs/toolkit";
// import { createCheckoutSession } from "../payment/PaymentThunk";

// interface PaymentState {
//   checkoutUrl: string | null;
//   error: string | null;
// }

// const initialState: PaymentState = {
//   checkoutUrl: null,
//   error: null,
// };

// const paymentSlice = createSlice({
//   name: "payment",
//   initialState,
//   reducers: {
//     clearPaymentState: (state) => {
//       state.checkoutUrl = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createCheckoutSession.fulfilled, (state, action) => {
//         state.checkoutUrl = action.payload.url;
//         state.error = null;
//       })
//       .addCase(createCheckoutSession.rejected, (state, action) => {
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { clearPaymentState } = paymentSlice.actions;
// export default paymentSlice.reducer;



// redux/payment/paymentSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { createCheckoutSession, getCheckoutSession } from "../payment/PaymentThunk";

interface PaymentState {
  checkoutUrl: string | null;
  session: any | null;   // session details
  error: string | null;
}

const initialState: PaymentState = {
  checkoutUrl: null,
  session: null,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    clearPaymentState: (state) => {
      state.checkoutUrl = null;
      state.session = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 createCheckoutSession
      .addCase(createCheckoutSession.fulfilled, (state, action) => {
        state.checkoutUrl = action.payload.url;
        state.error = null;
      })
      .addCase(createCheckoutSession.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      // 🔹 getCheckoutSession
      .addCase(getCheckoutSession.fulfilled, (state, action) => {
        state.session = action.payload;
        state.error = null;
      })
      .addCase(getCheckoutSession.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { clearPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;
