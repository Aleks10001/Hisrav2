import axios from "axios";
import { API_BASE_URL } from './config';

// Reusable Axios instance with a base URL
const api = axios.create({
    baseURL: API_BASE_URL,
});

export const login = async (email, password) => {
    return api.post("/auth/login", { email, password })
        .then(res => res.data)
        .catch(error => { throw error; });
};

export const register = async (email, password, confirm_password) => {
    return api.post("/auth/register", { email, password, confirm_password })
        .then(res => res.data)
        .catch(error => { throw error; })
};

export const logout = async (token) => {
    localStorage.removeItem('token');
    return api.post("/auth/logout", {}, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
        .catch(error => { throw error; })
};

export const checkAuth = async (token) => {
    return api.post("/auth/check", {}, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
        .catch(error => { throw error; })
};
