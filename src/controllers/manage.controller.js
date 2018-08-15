const ManageModel = require('../model/manage')
const { respondSuccess, respondResult, respondError } = require('../utils/response')

const getAllManage = async (req, res, next) => {
  try {
    const { cardId } = req.query
    const data = await ManageModel.findAll()
    const manages = Object.keys(data).map(key => Object.assign(data[key], { id: key} ))
    if(cardId) {
      const data = manages.find(manage => manage.manageId.cardId === cardId)
      respondResult(res)(data)
      return
    }
    respondResult(res)(manages)
  }catch(err) {
    respondError(res)(err)
  }
}

const getManageById = async (req, res, next) => {
  try {
    const manage = await ManageModel.findById(req.params.id)
    respondResult(res)(manage)
  }catch(err) {
    respondError(res)(err)
  }
}

const createManage = async (req, res, next) => {
  try {
    await ManageModel.create(req.body)
    respondSuccess(res)()
  }catch(err) {
    respondError(res)(err)
  }
}

const updateManage = async (req, res, next) => {
  try {
    await ManageModel.update(req.params.id, req.body)
    respondSuccess(res)()
  }catch(err) {
    respondError(res)(err)
  }
}

module.exports = {
  getAllManage,
  updateManage,
  createManage,
  getManageById
}