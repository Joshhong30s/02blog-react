import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://reactblog.onrender.com/api/',
})
