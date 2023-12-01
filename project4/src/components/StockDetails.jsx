import { CardHeader, FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


export default function StockDetails (){
    const { tickerSymbol } = useParams();
    const [stockDetails, setStockDetails] = useState({});
    const [stockSearch, setStockSearch] = useState([])
    const [stockData, setStockData] = useState([]);


        //AXIOS CALL FOR SEARCH FUNCTIONALITY to get ticker symbol and company name
        useEffect(() => {
            const searchStock = async () => {
            const response = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-11-29?adjusted=true&apiKey=1H7Tj22l9ZaxOuBw9xRv0m60HSotsBGt`)
                setStockSearch(response.data.results)
                console.log(response.data.results)
              }
              searchStock()
        }, [tickerSymbol])
//MAP the axios call to pull information of the stock that matches the correct ticker symbol



    return(
        <div className="stock-details">
            <h1 id="stock-search-title">{tickerSymbol}</h1>
            <Card id="stock-graph">Stock graph
        <h4>close price: {close}</h4>
        {/* <h4>heighest price for the day: {high}</h4>
        <h4>lowest price for the day: {low}</h4>
        <h4>number of transaction for the day: {n}</h4>
        <h4>For OTC ticker?: {otc}</h4>
        <h4>timestamp: {t}</h4>
        <h4>trading volume: {volume}</h4>
        <h4>volume weighted average price: {vw}</h4>
        <h4>will pull next page of data: {next_url}</h4> */}
                  <ul>
        {stockData.map((stock, index) => (
          <li key={index}>
            <p>Ticker Symbol: {stock.T}</p>
            <p>Volume: {stock.v}</p>
            <p>Volume Weighted Average: {stock.vw}</p>
            <p>Open Price: {stock.o}</p>
            <p>Close Price: {stock.c}</p>
            <p>High Price: {stock.h}</p>
            <p>Low Price: {stock.l}</p>
            <p>Number of Transactions: {stock.n}</p>
            <p>Timestamp: {stock.t}</p>
          </li>
        ))}
      </ul>
            
            </Card>
            <div>
                <Button id="graph-view"></Button>
                <Button id="graph-view"></Button>
                <Button id="graph-view"></Button>
                <Button id="graph-view"></Button>
                <Button id="graph-view"></Button>
            </div>
            <div className='pinned-stocks'>
                <Link to='./StockSearch'><Button variant="link" id="back-btn"><FontAwesomeIcon id="icon" icon={faAngleLeft} size="3x" /></Button></Link>
                <Card id="stock-details-stats">
                    <Card id="stock-stat" >P/E Ratio</Card>
                    <Card id="stock-stat">Dividend yeild</Card>
                    <Card id="stock-stat">Today's High</Card>
                    <Card id="stock-stat">Today's Low</Card>
                    <Card id="stock-stat">52 week high</Card>
                    <Card id="stock-stat">52 week low</Card>
                    <Card id="stock-stat">Market Cap</Card>
                    <Card id="stock-stat">Close price: </Card>
                </Card>
            </div>
        </div>
    )
}