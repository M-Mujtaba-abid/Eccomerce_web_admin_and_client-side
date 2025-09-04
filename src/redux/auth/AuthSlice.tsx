

import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "../auth/AuthThunk";

interface UserState {
  loading: boolean;
  error: string | null;
  success: boolean;
  user: any | null; // backend response me user object with userRole
  token: string | null;
}

const persistedToken = typeof localStorage !== 'undefined' ? localStorage.getItem("token") : null;
const persistedUser = typeof localStorage !== 'undefined' ? localStorage.getItem("user") : null;

const initialState: UserState = {
  loading: false,
  token: persistedToken,
  error: null,
  success: false,
  user: persistedUser ? JSON.parse(persistedUser) : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.success = false;
      state.error = null;
      state.token = null;
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
  },
  extraReducers: (builder) => {
    // ✅ Register
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ✅ Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        // Extract user + token from response
        const userData = action.payload.user || action.payload.data?.user;
        const tokenData = action.payload.token || action.payload.data?.token;

        state.user = userData;
        state.token = tokenData;

        if (typeof localStorage !== 'undefined') {
          if (tokenData) localStorage.setItem("token", tokenData);
          if (userData) localStorage.setItem("user", JSON.stringify(userData));
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ✅ Logout
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
