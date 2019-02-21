import React from 'react'
import Header from './components/Header/'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'
import { getLoginInfo } from './components/Header/store/actions'

const App = (props) => {
  return(
    <div>
      <Header staticContext={props.staticContext}/>
      {renderRoutes(props.route.routes)}
    </div>

  )
}
App.loadData = (store) => {
  return store.dispatch(getLoginInfo())
}
export default App
