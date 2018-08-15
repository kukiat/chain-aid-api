const ManageModel = require('../model/manage')

const getAllManage = async (req, res, next) => {
  try {
    const data = await ManageModel.findAll()
    const manages = Object.keys(data).map(key => Object.assign(data[key], { id: key} ))
    res.status(200).send({ results: manages })
  }catch(err) {
    res.status(500).send(err)
  }
}

const createManage = async (req, res, next) => {
  try {
    await ManageModel.create(req.body)
    res.status(200).send({ message: 'success' })
  }catch(err) {
    res.status(500).send(err)
  }
}

const updateManage = async (req, res, next) => {
  try {
    const response = await ManageModel.update(req.body)
    res.status(200).send({ message: 'success' })
  }catch(err) {
    res.status(500).send(err)
  }
}

module.exports = {
  getAllManage,
  updateManage,
  createManage
}