require('dotenv').config()

async function exchangeRate() {
  let myHeader = new Headers()
  myHeader.append(process.env.YOUR_NAME, process.env.API_VALUE)

  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeader
  };

  const exResponse = await fetch("https://api.apilayer.com/fixer/convert?to=myr&from=usd&amount=1", requestOptions)
  const exResults = await exResponse.json()
  console.log(exResults.result)
  return +exResults.result
    // response => response.text()
    // result => console.log(result)
    // error => console.log('error', error);
}
exchangeRate()