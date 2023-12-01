import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



export default function FindFriends (){
    const [showFriends, setShowFriends] = useState();

    const handleCloseFriends = () => setShowFriends(false);
    const handleShowFriends = () => setShowFriends(true);


    return(
        <div>
      <Offcanvas show={showFriends} onHide={handleCloseFriends}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
}

  
  