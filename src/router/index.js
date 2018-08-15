const express = require('express')

const manageController = require('../controllers/manage.controller')

const router = express.Router()

router.get('/manage', manageController.getAllManage)
router.post('/manage', manageController.createManage)
// router.patch('/manage', manageController.updateManage)

module.exports = router