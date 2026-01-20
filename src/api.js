import axios from "axios";
const product_api=import.meta.env.VITE_API_URL;
const API = axios.create({
  baseURL: `${product_api}` 
});

export default API;
