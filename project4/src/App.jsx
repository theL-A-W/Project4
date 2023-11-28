import { useState, useEffect } from 'react'
import ProfileSettings from './components/ProfileSettings'
import Navigation from './components/Navigation'
import './App.css'
import Home from './components/Home'
import Main from './components/Main'
import axios from 'axios'
// const finnhub = require('finnhub')
import finnhub from 'finnhub'

function App() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    // Fetch stocks from API
    
    // const getStock = async () => {
    // const response = await.axios.get(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=1H7Tj22l9ZaxOuBw9xRv0m60HSotsBGt`)
    //     setStocks(response)
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
      <Main/>
      <Navigation/>

    </div>
  )
}

export default App
