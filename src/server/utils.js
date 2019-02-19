import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

export const render = (req, store, Routes) => {
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            {renderRoutes(Routes)}
          </div>
        </StaticRouter>
      </Provider>
    ))
    return (
      `
        <html>
          <head>
            <title>ssr</title>
          </head>
          <body>
            <div id="root">${content}</div>
            <script>
              window.context = {
                state: ${JSON.stringify(store.getState())}
              }
            </script>
            <script src='./index.js'></script>
          </body>
        </html>
        `
    )
}
