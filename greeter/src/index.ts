import { greet } from './greet'

const express = require('express')
const app = express()
const port = 3000

// @ts-ignore
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// @ts-ignore
app.get('/greet', (req, res) => {
    res.send(greet(req.query.name, req.query.age))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
