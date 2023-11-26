import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { CardHeader, FormControl } from 'react-bootstrap';


export default function StockSearch (){
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