require('dotenv').config()
const Binance = require('node-binance-api');
const binance = new Binance().options({
});

calcAll()

async function calcAll() {
  let binRate = await binanceRateFunc()
  let exRate = await exchangeRateFunc()
  let lunRate = await lunoRateFunc()
  

  //console.log(typeof(binRate))
  //console.log(binRate)

  lunoUSD = lunRate / exRate
  diff = lunoUSD - binRate
  lunoPremium = (diff/lunoUSD) * 100

  console.log('Price of Bitcoin in Luno - ' + lunoUSD)
  console.log('USDMYR - ' + exRate)
  console.log('Price of Bitcoin in Binance - ' + binRate)
  console.log('Difference between Luno and Binance - ' + diff)
  console.log('Luno premium - ' + lunoPremium + '%')

  async function exchangeRateFunc() {
    let myHeader = new Headers()
    myHeader.append(process.env.YOUR_NAME, process.env.API_VALUE)
  
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeader
    };

    try {
    const exResponse = await fetch("https://api.apilayer.com/fixer/convert?to=myr&from=usd&amount=1", requestOptions)
    } catch (err) {
      console.log(err)
      console.log('Sorry, there waas a problem. Please try again.')
    }

    const exResponse = await fetch("https://api.apilayer.com/fixer/convert?to=myr&from=usd&amount=1", requestOptions)
    const exResults = await exResponse.json()
    if (exResults === NaN || exResults === undefined) {
      console.log('Sorry, there waas a problem. Please try again.')
    } else {
      if (exResponse.status === 200) {
        return Number(exResults.result)
      }
    }  
  }

    
  
  async function lunoRateFunc() {
    
  
    let lunBool = true

    try {
      const lunoResponse = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
    } catch (err) {
      console.log(err)
      console.log('Sorry, there waas a problem. Please try again.')
    }
    
    const lunoResponse = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
    const lunoResults = await lunoResponse.json()
    if (lunoResponse === NaN || lunoResponse === undefined) {
      console.log('Sorry, there waas a problem. Please try again.')
    } else {
      if (lunoResponse.status === 200) {
        return Number(lunoResults.last_trade)
      }
    }
  }
  
  async function binanceRateFunc() {
    try {
      let ticker = await binance.prices()
    } catch (err) {
      console.log(err)
      console.log('Sorry, there waas a problem. Please try again.')
    }

     ticker = await binance.prices()

    if (ticker === NaN || ticker === undefined) {
      console.log('Sorry, there waas a problem. Please try again.')
    } else {
        return +ticker.BTCBUSD
    }
  }
}

