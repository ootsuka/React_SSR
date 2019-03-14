import * as actions from './actions'
import { LIST_LOAD_SUCCESS } from './constants'

describe('async actions', () => {
  it('it should dispatch LIST_LOAD_SUCCESS when get news finishes', async() => {
    const newsList = ['trap', 'rap', 'migos']
    const axiosInstance = {
      get: jest.fn(() => Promise.resolve({ data: { data: newsList }}))
    }
    const dispatch = jest.fn()
    await actions.getNewsList()(dispatch, null, axiosInstance)
    expect(dispatch).toHaveBeenCalledWith({
      type: LIST_LOAD_SUCCESS,
      list: newsList
    })
  })
})
