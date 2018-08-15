const db = require('./firebase')

const ManageSchema = (manage) => ({
  manageId: {
    patientId: manage.patientId || '',
    cardId: manage.cardId || '',
    alienId: manage.alienId || '',
  },
  personalInfo: {
    name: manage.name || '',
    surname: manage.surname || '',
    nickname: manage.nickname || '',
    gender: manage.gender || '',
    birthday: manage.birthday || '',
    height: manage.height || '',
    weight: manage.weight || '',
    bloodType: manage.bloodType || '',
    nation: manage.nation || '',
    race: manage.race || '',
    religion: manage.religion || '',
    congenital: manage.congenital || '',
    allergyDrug: manage.allergyDrug || '',
    contact: manage.contact || '',
  },
  patientInformation: {
    address: manage.address || '',
    tel: manage.tel || '',
    email: manage.email || ''
  }
})

const getManageByCardId = (cardId) => {
  return new Promise((resolve, reject) => {
    db.database().ref('manage').once('value')
      .then(snap => resolve(snap.val()))
      .catch(err => reject(err))
  })
}

const getAllManage = (cardId) => {
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

const createManage =  (body) => {
  return new Promise((resolve, reject) => {
    const manageData = ManageSchema(body)
    db.database().ref('manage').push(manageData)
      .then(() => resolve('created'))
      .catch(err => reject(err))
  })
}


module.exports = {
  getManageByCardId,
  updateManageByCardId,
  createManage,
  getAllManage
}