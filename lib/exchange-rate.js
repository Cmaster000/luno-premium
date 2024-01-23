import dotenv from 'dotenv';
dotenv.config();

export async function exchangeRateFunc() {
  let myHeader = new Headers()
  myHeader.append(process.env.YOUR_NAME, process.env.API_VALUE)

  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeader
  };

  try {
    const exResponse = await fetch("https://api.apilayer.com/fixer/convert?to=myr&from=usd&amount=1", requestOptions) //new https://api.apilayer.com/exchangerates_data/convert?to=myr&from=usd&amount=1  //original https://api.apilayer.com/fixer/convert?to=myr&from=usd&amount=1
    //console.log(exResponse.json())
    if (exResponse.status === 200) {
      const exResults = await exResponse.json()
      if (exResults.result !== NaN || exResults.result !== undefined) {  
        return Number(exResults.result) 
      } 
        
      } else {
       // throw "Fetch Error"
      }  
      
    } catch (err) {
      if (err === "Fetch error")
              return "Failed to retrive exchange rate at this time, please try again"
          throw err;
   
  }

  
}