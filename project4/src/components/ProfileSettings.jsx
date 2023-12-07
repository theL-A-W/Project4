import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { DropdownItem, DropdownMenu, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import FindFriends from './FindFriends';
import { useUser } from '../../Context/userContext';


export default function ProfileSettings (){
    const [selectedImage, setSelectedImage] = useState(null);
    const [show, setShow] = useState(false);
    const [showFriends, setShowFriends] = useState(false);
    const { userState: { user, token } } = useUser();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowFriends = () => setShowFriends(true);

    const handleImageChange = (e) => {
        // Handle the selected image and update the state
        const file = e.target.files[0];
        setSelectedImage(file);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Add logic here to handle the submission, e.g., upload the image to the server
        // You can use FormData to send the image file to your backend
        const formData = new FormData();
        formData.append('profilePicture', selectedImage);
      }

      const handleCreateProfile = async () => {
     console.log(user)
          const response = await axios.post(
            'http://localhost:8000/user-profile/<int:pk>//',
            {
              user: user,
              email: email,
              username: username,
              bio: bio,
              avatar: img,
              pinned_stocks: pinned-stocks,
              messages: messages,

            },
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
      console.log(response)
          console.log(message)
          setMessage('');
          fetchUserMessages()
      };






    return(
        <div className="profile-settings">
            <div id="buttons-in-header">
            <Button variant="link" id="back-btn"><FontAwesomeIcon id="icon" icon={faAngleLeft} size="2x" /></Button>
            <FindFriends showFriends= {showFriends}/>
            </div>
            <div id="profile-img-profile-home"><Button id='edit-profile-photo' variant="primary" onClick={handleShow}><FontAwesomeIcon id="icon"  icon={faPenToSquare} size="xl"/></Button></div>

            <Form className='profile-form'>
                <FormLabel id= 'form-label'>Username: </FormLabel>
                <FormGroup id='form-group'>
                <FormControl type="input" id="change-username-input" placeholder="username">
                </FormControl>
                </FormGroup>
                
                <FormLabel id="form-label">Bio: </FormLabel>
                <FormGroup id='form-group'>
                <Form.Control as="textarea" rows={3} />
                </FormGroup>
            </Form>
            <Button id="update">Update</Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Edit Your Profile Photo</Modal.Title>
            </Modal.Header>
            <Form>
            <Modal.Body>
            <FormLabel id="form-label">Profile photo: </FormLabel>
                <FormGroup id='form-group'>
                <Form.Control type='file' accept="image/*" onChange={handleImageChange} />
                </FormGroup>
            </Modal.Body>
            <Modal.Footer>
            <Button type="submit" id='update-profile-photo'>Update Profile Picture</Button>
            </Modal.Footer>
            </Form>
        </Modal>

     </div>
    )
}