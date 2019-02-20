import { GET_LOGIN_SUCCESS } from './constants'

const defaultState = {
  login: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LOGIN_SUCCESS:
    return {
      ...state,
      login: action.value
    }
    default:
    return state
  }
}
