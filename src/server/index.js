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
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    const context = {}
    const html = render(req, store, Routes, context)
    console.log(context.NOT_FOUND)
    if (context.NOT_FOUND) {
      res.status(404)
    }
    res.send(html)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
