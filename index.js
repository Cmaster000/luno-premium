async function exchangeRateFunc() {
  let myHeader = new Headers()
  myHeader.append(process.env.YOUR_NAME, process.env.API_VALUE)

  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeader
  };

  const exResponse = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=myr&from=usd&amount=1", requestOptions)
  const exResults = await exResponse.json()
  // console.log(exResults.result)
  return Number(exResults.result)
}

async function lunoRateFunc() {


  const lunoResponse = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
  const lunoResults = await lunoResponse.json()
  // console.log(lunoResults.last_trade)
  return Number(lunoResults.last_trade)
}

async function binanceRateFunc() {
   let ticker = await binance.prices()
    return +ticker.BTCBUSD
  }

async function calcAll() {
let exRate = await exchangeRateFunc()
let lunRate = await lunoRateFunc()
let binRate = await binanceRateFunc()

console.log(typeof(binRate))

let lunoUSD = lunRate / exRate
let diff = lunoUSD - binRate
let lunoPremium = (diff/lunoUSD) * 100

console.log('Price of Bitcoin in Luno - ' + lunoUSD)
console.log('USDMYR - ' + exRate)
console.log('Price of Bitcoin in Binance - ' + binRate)
console.log('Difference between Luno and Binance - ' + diff)
console.log('Luno premium - ' + lunoPremium)
}

calcAll()