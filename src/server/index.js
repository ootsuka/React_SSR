import express from 'express'
import { render } from './utils'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import { getStore } from '../store'
import Routes from '../Routes'

const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/api',proxy('http://47.95.113.63', {
    proxyReqPathResolver: function (req) {
      return '/ssr/api' + req.url
    }
  }));
app.get('*', (req, res) => {
  const store = getStore(req)

  //load data based on route
  const promises = []

  const matchedRoutes = matchRoutes(Routes, req.path)
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })
  Promise.all(promises).then(() => {
    const context = {}
    context.css = []
    const html = render(req, store, Routes, context)
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.NOT_FOUND) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
