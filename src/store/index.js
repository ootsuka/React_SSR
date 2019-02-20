import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import homeReducer from '../containers/Home/store/reducer'
import headerReducer from '../components/Header/store/index'
import translationReducer from '../containers/Translation/store/reducer'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
})

export const getStore = (req) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}
export const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
