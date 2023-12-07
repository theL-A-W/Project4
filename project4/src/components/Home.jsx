import PinnedStocks from './PinnedStocks'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'


export default function Home (){


    const handleSignOutUser = () => {
        
    }
    return (
        <div className='home'>
            <Button id="sign-out-btn" onClick={handleSignOutUser}>Sign-out</Button>
            <Link to="./Messages"><Button id="message-icon"><FontAwesomeIcon id="icon" icon={ faMessage} size="3x" /></Button></Link>
            <div className="home-body">
                <PinnedStocks/>
            </div>
        </div>
)
}