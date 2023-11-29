import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { CardHeader, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import axios from 'axios'


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
    useEffect(() => {
//AXIOS CALL FOR SEARCH FUNCTIONALITY to get ticker symbol and company name
    const searchStock = async () => {
    const response = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=1H7Tj22l9ZaxOuBw9xRv0m60HSotsBGt`)
        setStockSearch(response)
        console.log(response.data)
      }
      searchStock()
}, [])






    return(
        <div className='stock-search'>
            <h1 id="stock-search-title">Stock Search</h1>
            <Form className='stock-search-form'>
                <FormControl type="input" id="stock-search-input" placeholder="search">
                </FormControl>
                <Button>Enter</Button>
            </Form>

            <div className='pinned-stocks'>
                <Button variant="link" id="back-btn"><FontAwesomeIcon id="icon" icon={faAngleLeft} size="3x" /></Button>
                <Card id="pinned-stock-card"></Card>
                <Card id="pinned-stock-card"></Card>
                <Card id="pinned-stock-card"></Card>
                <Card id="pinned-stock-card"></Card>
                <Card id="pinned-stock-card"></Card>
                <Card id="pinned-stock-card"></Card>
                <Card id="pinned-stock-card"></Card>
                <Card id="pinned-stock-card"></Card>

                
            </div>
        </div>
    )
}