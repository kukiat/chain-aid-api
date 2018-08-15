const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes)

app.listen(3001, () => {
  console.log('server start lew ja')
})