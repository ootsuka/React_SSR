import axios from 'axios'
import { GET_LOGIN_SUCCESS } from './constants'

export const getLoginInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json')
              .then((res) => {
                dispatch({
                  type: GET_LOGIN_SUCCESS,
                  value: res.data.data.login
                })
              })
  }
}

export const handleLogin = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/Login.json')
              .then((res) => {
                dispatch({
                  type: GET_LOGIN_SUCCESS,
                  value: true
                })
              })
  }
}

export const handleLogout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json')
              .then((res) => {
                dispatch({
                  type: GET_LOGIN_SUCCESS,
                  value: false
                })
              })
  }
}
