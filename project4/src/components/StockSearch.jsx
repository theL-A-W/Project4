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


                
            </div>
        </div>
    )
}