import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

export default axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-type": "application/json"
  }
});