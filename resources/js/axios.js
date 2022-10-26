import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const axiosClient = axios.create({
    baseURL: baseUrl,
})

// axiosClient.interceptors.request.use(config => {
//     document.querySelector('meta[name="csrf-token"]').getAttribute('content');
//     return config;
// })

export default axiosClient;
