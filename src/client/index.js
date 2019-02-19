import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { getClientStore }from '../store'
import Routes from '../Routes'

const store = getClientStore()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {Routes.map((route, index) => (
            <Route {...route} key={index}/>
          ))}
        </div>
      </BrowserRouter>
    </Provider>
  )
}
ReactDom.hydrate(<App />, document.getElementById('root'))
