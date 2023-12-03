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

//     useEffect(() => {
// //AXIOS CALL FOR SEARCH FUNCTIONALITY to get ticker symbol and company name
//     const searchStock = async () => {
//     const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=SONZ77OOD9744HMR`)
//         setStockSearch(response)
//         console.log(response.data)
//       }
//       searchStock()
// }, [])



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
                <Link to='/StockDetails/:tickerSymbol'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>
                <Link to='/StockDetails'><Card id="stock-search-card"></Card></Link>


                    {stockSearch.map((stock) => (
            <div className='search-stocks' key={stockSearch.id}>
            <Link to={'./Stock Details'}>
                <Card id='news-card'>
                <Card.Body>
                    <Card.Title>{stockSearch.c}</Card.Title>
                    <Card.Text>{stockSearch.h}</Card.Text>
                </Card.Body>
                </Card>
            </Link>
            </div>
        ))}



                
            </div>
        </div>
    )
}