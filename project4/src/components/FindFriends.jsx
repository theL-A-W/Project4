import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



export default function FindFriends (){
    const [showFriends, setShowFriends] = useState();

    const handleCloseFriends = () => setShowFriends(false);
    const handleShowFriends = () => setShowFriends(true);


    return(
        <div>
          <Button variant="link" id="find-friends-btn" onClick={handleShowFriends}>Find Friends</Button>
          <Offcanvas className="friends-offcanvas" style={{ width: '100%' }} show={showFriends} onHide={handleCloseFriends}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="friends-list-title">Find User:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Header className="search-friends">
                    {/* FRIEND SEARCH */}
                    <input placeholder="search friends" id="search-friends"></input>
                    <button>Search</button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="list-of-friends">
                        {/* {userProfile.map(user => (
                            <li key={user.id} className="friend-item">
                                {user.name}
                                <button id="delete-friend" onClick={() => handleDeleteFriend(user.id)}>
                                    <FontAwesomeIcon icon={faDeleteLeft} size="lg" style={{ color: "#bb111a" }} />
                                </button>
                            </li>
                        ))} */}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

  
  