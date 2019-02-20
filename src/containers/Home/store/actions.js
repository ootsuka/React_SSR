import axios from 'axios'
import { LIST_LOAD_SUCCESS } from './constants'

export const getNewsList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json')
              .then((res) => {
                const list = res.data.data
                dispatch({
                  type: LIST_LOAD_SUCCESS,
                  list
                })
              })
  }
}
