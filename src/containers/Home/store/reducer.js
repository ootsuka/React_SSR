import { LIST_LOAD_SUCCESS } from './constants'

const defaultState = {
  name: 'xin',
  newsList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LIST_LOAD_SUCCESS:
    return {
      ...state,
      newsList: action.list
    }
    default:
    return state
  }

}
