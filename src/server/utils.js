import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import stats from '../../public/react-loadable.json';

export const render = (req, store, Routes, context) => {
    let modules = []
    const content = renderToString((
      <Provider store={store}>
          <Loadable.Capture report={moduleName => modules.push(moduleName)}>
             <StaticRouter location={req.path} context={context}>
                <div>
                  {renderRoutes(Routes)}
                </div>
            </StaticRouter>
          </Loadable.Capture>
      </Provider>
    ))

    const helmet = Helmet.renderStatic();

    let bundles = getBundles(stats, modules);

    const css = context.css.length ? context.css.join('\n') : ''
    return (
      `
        <html>
          <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <style>${css}</style>
          </head>
          <body>
            <div id="root">${content}</div>
            <script>
              window.context = {
                state: ${JSON.stringify(store.getState())}
              }
            </script>
            ${bundles.map(bundle => {
              return `<script src="${bundle.file}"></script>`
              }).join('\n')}
            <script src='./index.js'></script>
          </body>
        </html>
        `
    )
}
