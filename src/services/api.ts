import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.114.62:8080",
});

export default api;
