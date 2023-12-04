import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { CardHeader, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function StockSearch (){
    const [stockSearch, setStockSearch] = useState([])

    useEffect(() => {
//AXIOS CALL FOR SEARCH FUNCTIONALITY to get ticker symbol and company name
    const searchStock = async () => {
        let searchInput = 'BA'
    const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=SONZ77OOD9744HMR`)
        setStockSearch(response.data.bestMatches)
        console.log(response.data.bestMatches)
      }
      searchStock()
}, [])



//THIS AXIOS CALL GETS INFO FOR A SINGLE STOCK THAT IS INPUTED IN THE CALL
    // useEffect(() => {
    // const getStock = async () => {
    // const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=1H7Tj22l9ZaxOuBw9xRv0m60HSotsBGt`)
    //     setStockSearch(response.data.results[0])
    //     console.log(response.data.results[0])
    //   }
    //   getStock()
    // }, [])


//THIS AXIOS CALL GETS ALL 10000 STOCKS WITH DETAILS
        //     useEffect(() => {
        //     const getStock = async () => {
        //     const response = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-11-29?adjusted=true&apiKey=1H7Tj22l9ZaxOuBw9xRv0m60HSotsBGt`)
        //         setStockSearch(response.data.results[0])
        //         console.log(response.data.results[0])
        //       }
        //       getStock()
        // }, )







    return(
        <div className='stock-search'>
            <h1 id="stock-search-title">Stock Search</h1>
            <Form className='stock-search-form'>
                <FormControl type="input" id="stock-search-input" placeholder="search">
                </FormControl>
                <Button>Enter</Button>
            </Form>
            <div className='search-stocks'>
                {/* <Link to='/StockDetails/:tickerSymbol'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link> */}


                    {stockSearch.map((stock) => (
            <div className='search-stocks' key={stock.id}>
            <Link to={'/Stock Details/:tickerSymbol'}>
                <Card id='stock-search-card'>
                <Card.Body>
                    <label>Symbol: </label>
                    <Card.Title><strong>{stock['1. symbol']}</strong></Card.Title>
                    <label>Namel: </label>
                    <Card.Text><strong>{stock['2. name']}</strong></Card.Text>
                </Card.Body>
                </Card>
            </Link>
            </div>
        ))}



                
            </div>
        </div>
    )
}