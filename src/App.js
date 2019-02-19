import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'

const App = (props) => {
  console.log(props.route)
  return(
    <div>
      <Header />
      {renderRoutes(props.route.routes)}
    </div>

  )
}

export default App
