import { LIST_LOAD_SUCCESS } from './constants'
import reducer from './index'

describe('Home reducer', () => {
  it('should return default state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        name: 'xin',
        newsList: []
      }
    )
  })

  it('should handle LIST_LOAD_SUCCESS', () => {
    const mockList = ['abc', 'def', 'ghi']
    expect(reducer({
      name: 'testname',
      newsList:[]
    }, {
      type: LIST_LOAD_SUCCESS,
      list: mockList
    })).toEqual({
      name: 'testname',
      newsList: mockList
    })
  })
})
