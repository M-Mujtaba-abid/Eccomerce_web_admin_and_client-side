import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import API from "../apiInstance";

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData: any, { rejectWithValue }) => {
    try {
        const response = await API.post('/user/register', userData, {
            
          });
    
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
);


// ✅ Login Thunk
export const loginUser = createAsyncThunk(
    "user/login",
    async (loginData: { email: string; password: string; userRole: string }, { rejectWithValue }) => {
      try {
        const response = await API.post("/user/login", loginData);
        // Token localStorage me save (redundant safety; slice will also persist)
        if (response.data?.token) {
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || "Login failed");
      }
    }
  );
// 🔹 Logout Thunk
export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.post("/user/logout"); // 👈 tumhara backend route
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);