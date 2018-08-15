const express = require('express')

const { updateManageByCardId, getManageByCardId, createManage, getAllManage } = require('../model')
const router = express.Router()
router.get('/manage', async (req, res, next) => {
  try {
    const data = await getAllManage()
    const manages = Object.keys(data).map(key => Object.assign(data[key], { id: key} ))
    res.status(200).send({ results: manages })
  }catch(err) {
    res.status(500).send(err)
  }
})

router.post('/manage', async (req, res, next) => {
  try {
    await createManage(req.body)
    res.status(200).send({ message: 'success' })
  }catch(err) {
    res.status(500).send(err)
  }
})

router.patch('/manage', async (req, res, next) => {
  try {
    const response = await updateManageByCardId(req.body)
    res.status(200).send({ message: 'success' })
  }catch(err) {
    res.status(500).send(err)
  }
})

module.exports = router