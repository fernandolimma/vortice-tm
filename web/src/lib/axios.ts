import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-vortice-tell-me-the-model-508231204334.us-west1.run.app",
  withCredentials: true,
})