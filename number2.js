var myHeaders = new Headers();
myHeaders.append("apikey", "DBzpTQn4QRVccyr7H2ddRCC4FmrP6dhH");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

let res = undefined

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=usd&base=myr", requestOptions)
  .then(response => response.text())
  //.then(result => console.log(result))
  .then(result => res = result)
  .then(console.log(res))
  .catch(error => console.log('error', error));