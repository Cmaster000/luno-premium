

export async function getLunoBTCPriceInMYR() {

    try {
      const lunoResponse = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
    } catch (err) {
      console.log(err)
      console.log('Sorry, there waas a problem. Please try again.')
    }
    
    const lunoResponse = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
    const lunoResults = await lunoResponse.json()
    // console.log("Failed to retrieve price")
    // return "Failed to retrieve price"
    console.log(lunoResults.last_trade)
    if (lunoResults.last_trade === NaN || lunoResults.last_trade === undefined) {
      return ('Failed to retrieve price')
    } else {
      if (lunoResponse.status === 200) {
        return Number(lunoResults.last_trade)
      }
    }
}