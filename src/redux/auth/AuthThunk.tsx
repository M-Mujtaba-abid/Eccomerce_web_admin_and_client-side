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
    loginData: { email: string; password: string },
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



export const fetchTotalUsers = createAsyncThunk(
  "user/fetchTotalUsers",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await API.get("/user/totaluser"); // 👈 yahan aapka API endpoint hoga
      return response.data.data.totalUser; // sirf number return karenge
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch total users");
    } finally {
      dispatch(hideLoader());
    }
  }
);


// 🔹 Get User Profile
export const getUserProfile = createAsyncThunk(
  "user/getProfile",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await API.get("/user/getuserprofile");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch profile"
      );
    } finally {
      dispatch(hideLoader());
    }
  }
);

// 🔹 Update User Profile
export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async (userData: FormData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await API.patch("/user/updateuserprofile", userData, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update profile"
      );
    } finally {
      dispatch(hideLoader());
    }
  }
);