import { CardHeader, FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function StockDetails (){
    return(
        <div className="stock-details">
            <h1 id="stock-search-title">StockName</h1>
            <Form className='news-form'>
                <FormControl type="input" id="stock-search-input" placeholder="search">
                </FormControl>
                <Button>Enter</Button>
            </Form>
            <Card id="stock-graph">Stock graph</Card>
            <div>
                <Button id="graph-view"></Button>
                <Button id="graph-view"></Button>
                <Button id="graph-view"></Button>
                <Button id="graph-view"></Button>
                <Button id="graph-view"></Button>
            </div>
            <div className='pinned-stocks'>
                <Button variant="link" id="back-btn"><FontAwesomeIcon id="icon" icon={faAngleLeft} size="3x" /></Button>
                <Card id="stock-details-stats">
                    <Card id="stock-stat">P/E Ratio</Card>
                    <Card id="stock-stat">Dividend yeild</Card>
                    <Card id="stock-stat">Today's High</Card>
                    <Card id="stock-stat">Today's Low</Card>
                    <Card id="stock-stat">52 week high</Card>
                    <Card id="stock-stat">52 week low</Card>
                    <Card id="stock-stat">Market Cap</Card>
                    <Card id="stock-stat">Reccomended?</Card>
                </Card>
            </div>
        </div>
    )
}