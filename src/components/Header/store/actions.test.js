import * as actions from './actions'
import { GET_LOGIN_SUCCESS } from './constants'


describe('async actions', () => {

  it('dispatches GET_LOGIN_SUCCESS with value when getting login has finishes', async() => {
      const axiosInstance = {
        get: jest.fn(() => Promise.resolve({ data: { data: {login : true}}}))
      }
      const dispatch = jest.fn()
      await actions.getLoginInfo()(dispatch, null, axiosInstance)
      expect(dispatch).toHaveBeenCalledWith({
         type: GET_LOGIN_SUCCESS,
         value: true
       })
    })

  it('dispatches GET_LOGIN_SUCCESS with true when handle login finishes', async() => {
    const axiosInstance = {
      get: jest.fn(() => Promise.resolve({}))
    }
    const dispatch = jest.fn()
    await actions.handleLogin()(dispatch, null, axiosInstance)
    expect(dispatch).toHaveBeenCalledWith({
      type: GET_LOGIN_SUCCESS,
      value: true
    })
  })

  it('dispatches GET_LOGIN_SUCCESS with false when handle logout finishes', async() => {
    const axiosInstance = {
      get: jest.fn(() => Promise.resolve({}))
    }
    const dispatch = jest.fn()
    await actions.handleLogout()(dispatch, null, axiosInstance)
    expect(dispatch).toHaveBeenCalledWith({
      type: GET_LOGIN_SUCCESS,
      value: false
    })
  })

})
