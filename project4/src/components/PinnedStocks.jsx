import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { CardHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function PinnedStocks (){


    return(
        <div className='pinned-stocks'>
            <Card id='profile-img-card'>
                <div id="profile-img"></div>
            </Card>
            <Card id="header-card">
                <div id="profile-name">John Doe</div>
                <h3>Pinned Stocks</h3>
            </Card>
            <Link to={`/StockDetails/TSLA`}><Card id="pinned-stock-card"></Card></Link>
            <Card id="pinned-stock-card"></Card>
            <Card id="pinned-stock-card"></Card>
            <Card id="pinned-stock-card"></Card>
            <Card id="pinned-stock-card"></Card>
            <Card id="pinned-stock-card"></Card>
            <Card id="pinned-stock-card"></Card>
            <Card id="pinned-stock-card"></Card>

            
        </div>
    )
}