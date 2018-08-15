const db = require('./firebase')

const getManageByCardId = (cardId) => {
  return new Promise((resolve, reject) => {
    db.database().ref('manage').once('value')
      .then(snap => resolve(snap.val()))
      .catch(err => reject(err))
  })
}

const updateManageByCardId = (manageData) => {
  const { id } = manageData
  return new Promise((resolve, reject) => {
    db.database().ref().child(`/${id}`).update(manageData)
      .then(() => resolve('updated'))
      .catch(err => reject(err))
  })
}

const createManage =  (manageData) => {
  return new Promise((resolve, reject) => {
    db.database().ref('manage').push(manageData)
      .then(() => resolve('created'))
      .catch(err => reject(err))
  })
}

module.exports = {
  getManageByCardId,
  updateManageByCardId,
  createManage
}