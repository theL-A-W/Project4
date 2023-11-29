import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { CardHeader, FormControl, FormLabel, FormText } from 'react-bootstrap';


export default function ProfileSettings (){
    return(
        <div className="profile-settings">
            <Button variant="link" id="back-btn"><FontAwesomeIcon id="icon" icon={faAngleLeft} size="3x" /></Button>
            <div id="profile-img-profile-home"></div>
            <Form className='profile-form'>
                <FormLabel>Username: </FormLabel>
                <FormControl type="input" id="change-username-input" placeholder="username">
                </FormControl>
                <br></br>
                <FormLabel id="bio label">Bio: </FormLabel>
                <Form.Control as="textarea" rows={3} />
            </Form>
            <Button>Done</Button>
        </div>
    )
}