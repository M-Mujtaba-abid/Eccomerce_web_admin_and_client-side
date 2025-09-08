import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:8000" , 
  baseURL: "https://eccomerce-web-server-side.onrender.com", 
  withCredentials: true, 
  
});



export default API;
