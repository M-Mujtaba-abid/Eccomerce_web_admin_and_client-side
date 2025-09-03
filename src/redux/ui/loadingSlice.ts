// import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// interface LoadingState {
//   inFlightCount: number;
// }

// const initialState: LoadingState = {
//   inFlightCount: 0,
// };

// const loadingSlice = createSlice({
//   name: "loading",
//   initialState,
//   reducers: {
//     incrementLoading: (state) => {
//       state.inFlightCount += 1;
//     },
//     decrementLoading: (state) => {
//       state.inFlightCount = Math.max(0, state.inFlightCount - 1);
//     },
//     resetLoading: (state) => {
//       state.inFlightCount = 0;
//     },
//   },
// });

// export const { incrementLoading, decrementLoading, resetLoading } = loadingSlice.actions;
// export default loadingSlice.reducer;

// export const selectLoading = (state: { loading: LoadingState }) => state.loading.inFlightCount > 0;
// export const useLoading = () => useSelector(selectLoading);
