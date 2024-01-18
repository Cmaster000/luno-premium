getExchangeRate()

function getExchangeRate() {

  var myHeaders = new Headers();
  myHeaders.append("apikey", "DBzpTQn4QRVccyr7H2ddRCC4FmrP6dhH");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  return getLink()
  
  async function getLink() {
    return objectExchange = await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=USD&base=MYR", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  async function main() {
    console.log(await getLink())
  } 
}
