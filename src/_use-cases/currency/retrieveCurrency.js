const CACHE_KEY = 'supported-currencies'

const makeRetrieveCurrency = ({ config, axios }) => {

	const checkCurrency = (data, to, from, myCache) => {

		const supportedCurrencies = myCache.get(CACHE_KEY)

		if(supportedCurrencies.includes(to) && supportedCurrencies.includes(from)){
			return data
		}

		else{
			throw new Error('CURRENCY_NOT_SUPPORTED')
		}
	}

	return async function retrieveCurrency({ from, to, amount, myCache }) {
		console.log(myCache.get('supported-currencies'))
		const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${from}`)
		const verifiedData = checkCurrency(data.rates, to, from, myCache)

		return {
			baseNumber: amount,
			conversion: verifiedData[to] * amount
		}
	}
}

module.exports = makeRetrieveCurrency