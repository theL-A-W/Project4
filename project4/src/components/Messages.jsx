import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

export default function(){
    return(
        <div className="messages">
            <Button id="message-icon"><FontAwesomeIcon id="icon" icon={ faMessage} size="3x" /></Button>
        </div>
    )
}