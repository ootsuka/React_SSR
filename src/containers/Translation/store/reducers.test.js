import * as types from './constants'
import reducer from './reducer'

describe('Translation reducer', () => {
  it('should return default state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        translation: []
      }
    )
  })

  it('should handle GET_TRANS_SUCCESS', () => {
    const mockList = ['测试1', '测试2', '测试3']
    expect(reducer({
      translation: []
    }, {
      type: types.GET_TRANS_SUCCESS,
      list: mockList
    })).toEqual({
      translation: mockList
    })
  })
  it('should handle GET_TRANS_FAIL', () => {
    expect(reducer({
      translation: []
    }, {
      type: types.GET_TRANS_FAIL,
    })).toEqual({
      translation: []
    })
  })
})
