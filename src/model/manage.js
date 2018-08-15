const db = require('./firebase')

const createScheme = (manage) => ({
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
  },
  createdAt: `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`,
  updatedAt: `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`
})

const findAll = () => {
  return new Promise((resolve, reject) => {
    db.database().ref('manage').once('value')
      .then(snap => resolve(snap.val()))
      .catch(err => reject(err))
  })
}

const findById = (id) => {
  return new Promise((resolve, reject) => {
    db.database().ref().child(`/manage/${id}`).once('value')
      .then(snap => resolve(Object.assign(snap.val(), { id: snap.key })))
      .catch(err => reject(err))
  })
}

const update = (id, body) => {
  return new Promise((resolve, reject) => {
    const manageData = createScheme(body)
    const manageRef = db.database().ref().child(`manage/${id}`)
    manageRef.update(manageData)
      .then(() => resolve('updated'))
      .catch(err => reject(err))
  })
}

const create =  (body) => {
  return new Promise((resolve, reject) => {
    const manageData = createScheme(body)
    db.database().ref('manage').push(manageData)
      .then(() => resolve('created'))
      .catch(err => reject(err))
  })
}


module.exports = {
  findAll,
  update,
  create,
  findById
}