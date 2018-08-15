const respondSuccess = res => (message = 'success') => res.status(200).send({ message })

const respondResult = res => results => res.status(200).send({ results })

const respondError = res => err => res.status(err.code || 500).send(err.message || { message: 'Internal Server Error' })

module.exports = {
  respondSuccess,
  respondResult,
  respondError
}