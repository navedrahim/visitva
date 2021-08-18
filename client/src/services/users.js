import api from './apiConfig.js';

export const getAllUsers = async () => {
  const res = await api.get('/users');
  return res.data;
}

export const getUser = async (id) =>{
  const res = await api.get(`/users/${id}`)
  return res.data
}

export const register = async (userData) =>{
  const res = await api.post("/users", { user: userData })
  const { token } = res.data
  if (token) {
    localStorage.setItem('authToken', token)
    api.defaults.headers.common.authorization = `Bearer ${token}`
    return res.data.user
  }
}

export const login = async (userData) => {
  const res = await api.post("/users/login", { user: userData })
  const { token } = res.data
  if (token) {
    localStorage.setItem('authToken', token)
    api.defaults.headers.common.authorization = `Bearer ${token}`
    return res.data.user
  }
}


export const verify = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const res = await api.get("/users/verify")
    return res.data
  }
}

export const logout = () => {
  localStorage.removeItem("authToken")
  api.defaults.headers.common.authorization = null

}