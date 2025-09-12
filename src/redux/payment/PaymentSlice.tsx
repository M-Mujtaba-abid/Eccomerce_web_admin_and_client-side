// // redux/payment/paymentSlice.ts
// import { createSlice } from "@reduxjs/toolkit";
// import { createCheckoutSession, getCheckoutSession } from "../payment/PaymentThunk";

// interface PaymentState {
//   checkoutUrl: string | null;
//   session: any | null;
//   loading: boolean;   // ✅ type only here
//   error: string | null;
// }

// const initialState: PaymentState = {
//   checkoutUrl: null,
//   loading: false,     // ✅ actual value
//   session: null,
//   error: null,
// };

// const paymentSlice = createSlice({
//   name: "payment",
//   initialState,
//   reducers: {
//     clearPaymentState: (state) => {
//       state.checkoutUrl = null;
//       state.session = null;
//       state.error = null;
//       state.loading = false;  // reset loading as well
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // 🔹 createCheckoutSession
//       .addCase(createCheckoutSession.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createCheckoutSession.fulfilled, (state, action) => {
//         state.checkoutUrl = action.payload.url;
//         state.error = null;
//         state.loading = false;
//       })
//       .addCase(createCheckoutSession.rejected, (state, action) => {
//         state.error = action.payload as string;
//         state.loading = false;
//       })

//       // 🔹 getCheckoutSession
//       .addCase(getCheckoutSession.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getCheckoutSession.fulfilled, (state, action) => {
//         state.session = action.payload;
//         state.error = null;
//         state.loading = false;
//       })
//       .addCase(getCheckoutSession.rejected, (state, action) => {
//         state.error = action.payload as string;
//         state.loading = false;
//       });
//   },
// });

// export const { clearPaymentState } = paymentSlice.actions;
// export default paymentSlice.reducer;



// redux/payment/paymentSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import {
  createCheckoutSession,
  getCheckoutSession,
  cancelCheckoutSession, // ✅ import the new thunk
} from "../payment/PaymentThunk";

interface PaymentState {
  checkoutUrl: string | null;
  session: any | null;
  loading: boolean;
  error: string | null;
  cancelMessage: string | null; // ✅ to store cancel/failure message
}

const initialState: PaymentState = {
  checkoutUrl: null,
  loading: false,
  session: null,
  error: null,
  cancelMessage: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    clearPaymentState: (state) => {
      state.checkoutUrl = null;
      state.session = null;
      state.error = null;
      state.loading = false;
      state.cancelMessage = null; // reset cancel message
    },
  },
  extraReducers: (builder) => {
    builder
      // ----------------- createCheckoutSession -----------------
      .addCase(createCheckoutSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCheckoutSession.fulfilled, (state, action) => {
        state.checkoutUrl = action.payload.url;
        state.error = null;
        state.loading = false;
      })
      .addCase(createCheckoutSession.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // ----------------- getCheckoutSession -----------------
      .addCase(getCheckoutSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCheckoutSession.fulfilled, (state, action) => {
        state.session = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getCheckoutSession.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // ----------------- cancelCheckoutSession -----------------
      .addCase(cancelCheckoutSession.pending, (state) => {
        state.loading = true;
        state.cancelMessage = null;
      })
      .addCase(cancelCheckoutSession.fulfilled, (state, action) => {
        state.cancelMessage = action.payload?.message || "Payment cancelled/failed";
        state.loading = false;
        state.error = null;
      })
      .addCase(cancelCheckoutSession.rejected, (state, action) => {
        state.cancelMessage = null;
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { clearPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;
