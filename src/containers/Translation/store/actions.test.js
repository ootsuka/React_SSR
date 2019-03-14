import * as actions from './actions'
import { GET_TRANS_SUCCESS, GET_TRANS_FAIL } from './constants'

describe('async actions', () => {
  it('it should dispatch GET_TRANS_SUCCESS when get translation succeed', async() => {
    const transList = ['翻译', '成功', '加油']
    const axiosInstance = {
      get: jest.fn(() => Promise.resolve({ data:
        {
          data: transList,
          success: true
        }
      }))
    }
    const dispatch = jest.fn()
    await actions.getTranslation()(dispatch, null, axiosInstance)
    expect(dispatch).toHaveBeenCalledWith({
      type: GET_TRANS_SUCCESS,
      list: transList
    })
  })
  it('it should dispatch GET_TRANS_FAIL when get translation succeed', async() => {
    const transList = ['翻译', '成功', '加油']
    const axiosInstance = {
      get: jest.fn(() => Promise.resolve({ data:
        {
          success: false
        }
      }))
    }
    const dispatch = jest.fn()
    await actions.getTranslation()(dispatch, null, axiosInstance)
    expect(dispatch).toHaveBeenCalledWith({
      type: GET_TRANS_FAIL
    })
  })
})
