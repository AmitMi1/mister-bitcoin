import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
    getAvgBlockSize
}


const API_RATE_URL = 'https://blockchain.info/tobtc?currency=USD&value='
const API_MARKET_PRICE_URL = 'https://api.blockchain.info/charts/market-price?timespan=6months&format=json&cors=true'
const API_CONFIRMED_TRANSACTION_URL = 'https://api.blockchain.info/charts/n-transactions?timespan=6months&format=json&cors=true'
const API_AVG_BLOCK_SIZE_URL = 'https://api.blockchain.info/charts/avg-block-size?timespan=6months&format=json&cors=true'

async function getRate(coins) {
    const res = await axios({
        method: 'get',
        url: API_RATE_URL + coins
    })
    return res.data
}

async function getMarketPrice() {
    const res = await axios({
        method: 'get',
        url: API_MARKET_PRICE_URL
    })
    return res.data.values
}

async function getConfirmedTransactions() {
    const res = await axios({
        method: 'get',
        url: API_CONFIRMED_TRANSACTION_URL
    })
    return res.data.values
}

async function getAvgBlockSize() {
    const res = await axios({
        method: 'get',
        url: API_AVG_BLOCK_SIZE_URL
    })
    return res.data.values
}