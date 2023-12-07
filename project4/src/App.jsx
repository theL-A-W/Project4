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

  // useEffect(() => {
    




//This axios call below works!!!!! 

//Can i map over this axios call to input all 500 different ticker symbols in staggnated periods?
//This checks prices for one day. Make separate API calls for 1 month, 3 months, 6 months, 1 year, 3 years?
    // const getStock = async () => {
    // const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=1H7Tj22l9ZaxOuBw9xRv0m60HSotsBGt`)
    //     setStocks(response.data.results)
    //     console.log(response.data.results[0])
    //   }
    //   getStock()

    // }, [])

  return (
    <div>
      <SignIn
  setUser={setUser}
  toggleAuthenticated={toggleAuthenticated}
/>
      <Main/>
      <Navigation/>
      <div>
      </div>
    </div>
  )
}

export default App
