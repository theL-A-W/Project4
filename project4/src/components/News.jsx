
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { CardHeader, FormControl } from 'react-bootstrap';


export default function News (){
    return(
        <div className='news'>
            <h1 id="stock-search-title">News</h1>
            <Form className='news-form'>
                <FormControl type="input" id="stock-search-input" placeholder="search">
                </FormControl>
                <Button>Enter</Button>
            </Form>
            <Card id="top-news-card"></Card>
            <div className='pinned-stocks'>
                <Card id="news-card"></Card>
                <Card id="news-card"></Card>
                <Card id="news-card"></Card>
                <Card id="news-card"></Card>
            </div>
        </div>
    )
}