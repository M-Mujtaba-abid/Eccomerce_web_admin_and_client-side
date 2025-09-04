



import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../apiInstance";
import { showLoader, hideLoader } from "../LoaderSlice";

// 🔹 Register User
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData: any, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader()); // Loader ON
      const response = await API.post("/user/register", userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Registration failed");
    } finally {
      dispatch(hideLoader()); // Loader OFF
    }
  }
);

// 🔹 Login User
export const loginUser = createAsyncThunk(
  "user/login",
  async (
    loginData: { email: string; password: string; userRole: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(showLoader());
      const response = await API.post("/user/login", loginData);

      // Token localStorage me save
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    } finally {
      dispatch(hideLoader());
    }
  }
);

// 🔹 Logout User
export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await API.post("/user/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    } finally {
      dispatch(hideLoader());
    }
  }
);
