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
//         let searchInput = 'BA'
//     const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=SONZ77OOD9744HMR`)
//         setStockSearch(response.data.bestMatches)
//         console.log(response.data.bestMatches)
//       }
//       if(stockSearch() === undefined){
//         const searchStock2 = async () => {
//             let searchInput = 'BA'
//         const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=DPS4UKN7S2MUS5QH`)
//             setStockSearch(response.data.bestMatches)
//             console.log(response.data.bestMatches)
//             }
//             searchStock2()
//       } else
//       searchStock()
// }, [])










    useEffect(() => {
//AXIOS CALL FOR SEARCH FUNCTIONALITY to get ticker symbol and company name
    const searchStock = async () => {
        let searchInput = 'TSLA'
    const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=SONZ77OOD9744HMR`)
        setStockSearch(response.data.bestMatches)
        console.log(response.data.bestMatches)
      }

//       if(stockSearch === 'undefined' ){
//         useEffect(() => {
//         const searchStock2 = async () => {
//             let searchInput = 'BA'
//         const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=DPS4UKN7S2MUS5QH`)
//             setStockSearch(response.data.bestMatches)
//             console.log(response.data.bestMatches)
//             }    
//             searchStock2()
//         }, [])
//             } else 
            searchStock()
        }, [])




//     useEffect(() => {
// //AXIOS CALL FOR SEARCH FUNCTIONALITY to get ticker symbol and company name
//     const searchStock = async () => {
//         let searchInput = 'BA'
//         let apikey = 'SONZ77OOD9744HMR'
//     const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=${apikey}`)
//     setStockSearch(response.data.bestMatches)
//     console.log(response.data.bestMatches)
    
//     if(response === 'undefined'){
//         let apikey = 'DPS4UKN7S2MUS5QH'
//     const response2 = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=${apikey}`)
//         setStockSearch(response2.data.bestMatches)
//         console.log(response2.data.bestMatches)
//       }
//             searchStock()
//     }
//         }, [])



// useEffect(() => {
//     // AXIOS CALL FOR SEARCH FUNCTIONALITY to get ticker symbol and company name
//     const searchStock = async () => {
//       let searchInput = 'BA';
//       const response = await axios.get(
//         `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=SONZ77OOD9744HMR`
//       );
//       if (response.data.bestMatches !== undefined) {
//         setStockSearch(response.data.bestMatches);
//         console.log(response.data.bestMatches);
//       } else {
//         const searchStock2 = async () => {
//             let searchInput = 'BA';
//             const response = await axios.get(
//               `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=DPS4UKN7S2MUS5QH`
//             );
//             if (response.data.bestMatches !== undefined) {
//               setStockSearch(response.data.bestMatches);
//               console.log(response.data.bestMatches);
//             } else {
//               console.error('No data found for searchStock2');
//             }
//           };
//         searchStock2();
//       }
//     };



//     searchStock();
//   }, []); 








// useEffect(() => {
//     // AXIOS CALL FOR SEARCH FUNCTIONALITY to get ticker symbol and company name
//     const searchStock = async () => {
//       let searchInput = 'B'
//       try {
//         const response = await axios.get(
//           `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=SONZ77OOD9744HMR`
//         )
//         setStockSearch(response.data.bestMatches || [])
//         console.log(response.data.bestMatches)
//       } catch (undefined) {
//         console.error('Error fetching data:', error)
//         // If there's an error, execute the second axios call
//         searchStock2()
//       }
//     }

//     const searchStock2 = async () => {
//       try {
//         const response = await axios.get(
//           'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=DPS4UKN7S2MUS5QH'
//         )
//         // Handle the response from the second call
//         console.log('Second axios call:', response.data)
//       } catch (error) {
//         console.error('Error fetching data from second call:', error)
//       }
//     }

//     searchStock()
//   }, [])

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
            <Link to={'/StockDetails/:tickerSymbol'}>
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