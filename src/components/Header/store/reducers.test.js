import { GET_LOGIN_SUCCESS } from './constants'
import reducer from './index'

describe('Header reducer', () => {
  it('should return default state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        login: null
      }
    )
  })

  it('should handle GET_LOGIN_SUCCESS', () => {
    expect(reducer({}, {
      type: GET_LOGIN_SUCCESS,
      value: true
    })).toEqual({
      login: true
    })
  })
})
