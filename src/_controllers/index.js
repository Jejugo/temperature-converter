const makeGetHealth = require('./health')
const makeGetCurrency = require('./currency/getCurrency')
const makePostCurrency = require('./currency/postCurrency')
const makeDeleteCurrency = require('./currency/deleteCurrency')
const errorMessages = require('../error-messages.json')


//use-cases
const { retrieveCurrency, addCurrency, removeCurrency } = require('../_use-cases')

const getHealth = makeGetHealth()
const getCurrency = makeGetCurrency({ errorMessages, retrieveCurrency })
const postCurrency = makePostCurrency({ errorMessages, addCurrency })
const deleteCurrency = makeDeleteCurrency({ errorMessages, removeCurrency })

module.exports = {
  getHealth,
  getCurrency,
  postCurrency,
  deleteCurrency
}