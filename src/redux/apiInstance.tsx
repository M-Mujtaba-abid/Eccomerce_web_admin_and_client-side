import axios from "axios";

// Axios instance
const API = axios.create({
  baseURL: "http://localhost:8000", // ✅ backend URL
  withCredentials: true, // ✅ important: cookies send/receive ke liye
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default API;
