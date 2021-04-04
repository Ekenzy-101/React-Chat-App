import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export const http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};
