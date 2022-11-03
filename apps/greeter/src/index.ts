import { addNumbers } from '../../math/src/add-numbers'
import { format } from '../../formatter/src/formatter'

function greet(name: string, age: string) {
  var convertedAge = parseInt(age)
  return `Hello ${format(name, convertedAge)}. If you were 10 years older you'd be ${addNumbers(convertedAge, 10)}`
}

const express = require('express')
const app = express()
const port = 3000

// @ts-ignore
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// @ts-ignore
app.get('/greet', (req, res) => {
    console.log("Received /greet call!")
    res.send(greet(req.query.name, req.query.age))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
