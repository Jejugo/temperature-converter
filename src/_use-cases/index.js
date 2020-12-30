const config = require('../../config')
const axios = require('axios')

const makeRetrieveCurrency = require('./currency/retrieveCurrency');
const makeAddCurrency = require('./currency/addCurrency');
const makeRemoveCurrency = require('./currency/removeCurrency');

const retrieveCurrency = makeRetrieveCurrency({ config, axios })
const addCurrency = makeAddCurrency({})
const removeCurrency = makeRemoveCurrency({})


module.exports = {
    retrieveCurrency,
    addCurrency,
    removeCurrency
}