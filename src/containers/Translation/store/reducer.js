import { GET_TRANS_SUCCESS, GET_TRANS_FAIL } from './constants'

const defaultState = {
  translation: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_TRANS_SUCCESS:
    return {
      ...state,
      translation: action.list
    }
    case GET_TRANS_FAIL:
    return state
    default:
    return state
  }

}
