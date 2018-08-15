const express = require('express')

const { updateManageByCardId, getManageByCardId, createManage } = require('../model')
const router = express.Router()
router.get('/manage', async (req, res, next) => {
  try {
    const manageData = await getManageByCardId()
    res.status(200).send({ results: 'xxxx' })
  }catch(err) {
    res.status(500).send(err)
  }
})

router.post('/manage', async (req, res, next) => {
  try {
    const response = await createManage(req.body)
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