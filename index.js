import { binanceRateFunc } from './lib/binance.js'
import { getLunoBTCPriceInMYR } from './lib/luno.js'
import { exchangeRateFunc } from './lib/exchange-rate.js'

// await binanceRateFunc()
// await getLunoBTCPriceInMYR()
// await exchangeRateFunc()

calcAll()

async function calcAll() {
  let binRate = await binanceRateFunc()
  let exRate = await exchangeRateFunc()
  let lunRate = await getLunoBTCPriceInMYR()

  let lunoUSD = lunRate / exRate
  let diff = lunoUSD - binRate
  let lunoPremium = (diff/lunoUSD) * 100

  console.log('Price of Bitcoin in Luno - ' + lunoUSD)
  console.log('USDMYR - ' + exRate)
  console.log('Price of Bitcoin in Binance - ' + binRate)
  console.log('Difference between Luno and Binance - ' + diff)
  console.log('Luno premium - ' + lunoPremium + '%')
}