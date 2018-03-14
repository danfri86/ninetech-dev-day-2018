import axios from "axios";

const devDayInstance = axios.create({
  baseURL: "http://localhost:8080/api/"
});

export default devDayInstance;
