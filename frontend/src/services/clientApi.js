import { getAuthCookie } from "@/lib";
import axios from "axios";



const clientApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/v1/api',
  headers: {
    "Content-Type": "application/json",
  },
})


clientApi.interceptors.request.use(
  (config) => {
    const token = getAuthCookie();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default clientApi