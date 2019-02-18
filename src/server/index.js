import express from 'express'
import { render } from './utils'

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(render(req))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
