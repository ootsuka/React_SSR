import axios from 'axios'
import { GET_TRANS_SUCCESS, GET_TRANS_FAIL } from './constants'

export const getTranslation = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json')
              .then((res) => {
                if (res.data.success) {
                  let list = res.data.data
                  dispatch({
                    type: GET_TRANS_SUCCESS,
                    list
                  })
                } else {
                  dispatch({
                    type: GET_TRANS_FAIL,
                  })
                }
              })
  }
}
