import { useState, useEffect } from 'react'
import ProfileSettings from './components/ProfileSettings'
import Navigation from './components/Navigation'
import './App.css'
import Home from './components/Home'
import Main from './components/Main'
import axios from 'axios'
// const finnhub = require('finnhub')
import finnhub from 'finnhub'
import SignIn from './components/SignIn'

function App() {
  const [stocks, setStocks] = useState([])
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Fetch stocks from API
    




//This axios call below works!!!!! 


//Can i map over this axios call to input all 500 different ticker symbols in staggnated periods?
//This checks prices for one day. Make separate API calls for 1 month, 3 months, 6 months, 1 year, 3 years?
    // const getStock = async () => {
    // const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=1H7Tj22l9ZaxOuBw9xRv0m60HSotsBGt`)
    //     setStocks(response.data.results)
    //     console.log(response.data.results[0])
    //   }
    //   getStock()








//AXIOS CALL FOR SEARCH FUNCTIONALITY to get ticker symbol
    // const getStock = async () => {
    // const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=SONZ77OOD9744HMR`)
    //     setStocks(response)
    //     console.log(response.data)
    //   }
    //   getStock()


    // const getStock = async () => {
    // const response = await.axios.get(`wss://ws.finnhub.io?token=clicl7pr01qvtjtlfqegclicl7pr01qvtjtlfqf0`)
    //     setStocks(response)
    //   }
    //   getStock()

//       const getStock = async () => {
//     const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = "clicl7pr01qvtjtlfqegclicl7pr01qvtjtlfqf0"
// const response = new finnhub.DefaultApi()
//         setStocks(response)
//         console.log(setStocks)
//         console.log(response)
//       }
//       getStock()
    }, [])


// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }









  return (
    <div>
      <SignIn
  setUser={setUser}
  toggleAuthenticated={toggleAuthenticated}
/>
      <Main/>
      <Navigation/>
      <div>
        {/* <h4>close price: </h4> */}
        {/* <h4>heighest price for the day: {h}</h4>
        <h4>lowest price for the day: {l}</h4>
        <h4>number of transaction for the day: {n}</h4>
        <h4>For OTC ticker?: {otc}</h4>
        <h4>timestamp: {t}</h4>
        <h4>trading volume: {v}</h4>
        <h4>volume weighted average price: {vw}</h4>
        <h4>will pull next page of data: {next_url}</h4> */}
      </div>
    </div>
  )
}

export default App
