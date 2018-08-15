const express = require('express')

const manageController = require('../controllers/manage.controller')

const router = express.Router()

router.get('/manage', manageController.getAllManage)
router.get('/manage/:id', manageController.getManageById)
router.post('/manage', manageController.createManage)
router.patch('/manage/:id', manageController.updateManage)

module.exports = router