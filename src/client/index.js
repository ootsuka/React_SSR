import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Loadable from 'react-loadable'

import { getClientStore }from '../store'
import Routes from '../Routes'

const store = getClientStore()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {renderRoutes(Routes)}
        </div>
      </BrowserRouter>
    </Provider>
  )
}
Loadable.preloadReady().then(() => {
  ReactDom.hydrate(<App />, document.getElementById('root'))
});
