const express = require('express')

const router = express.Router()

router.get('/manage', (req, res, next) => {
  res.status(200).send({
    status: 'ok'
  })
})

router.get('/manage', (req, res, next) => {
  res.status(200).send({
    status: 'ok'
  })
})

module.exports = router