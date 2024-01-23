import Binance from 'node-binance-api';
const binance = new Binance().options({
});

export async function binanceRateFunc() {
    try {
      let ticker = await binance.prices()
    } catch (err) {
      console.log(err)
      console.log('Sorry, there waas a problem. Please try again.')
    }

     let ticker = await binance.prices()

    if (ticker === NaN || ticker === undefined) {
      console.log('Sorry, there waas a problem. Please try again.')
    } else {
        return +ticker.BTCBUSD
    }
  }