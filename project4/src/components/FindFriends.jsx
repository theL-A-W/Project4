import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faAdd } from '@fortawesome/free-solid-svg-icons'


export default function FindFriends (){
    const [showFriends, setShowFriends] = useState();
    const [users, setUsers] = useState([])

    const handleCloseFriends = () => setShowFriends(false)

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/list-users/');
            setUsers(response.data.users);
            console.log(response.data.users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleShowFriends = () => {
        fetchUsers();
        setShowFriends(true);
    };
    const handleAddFriends = () => {
        
    }

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
                        {users.map(user => (
                            <li key={user.username} className="friend-item">
                                {user.username}
                                <button id="add-friend" onClick={() => handleAddFriend(user.id)}>
                                    {/* <FontAwesomeIcon icon={faAdd} size="lg" style={{ color: "white" }} /> */}
                                    <p id="add-icon"><strong>+</strong></p>
                                </button>
                                {/* <button id="delete-friend" onClick={() => handleDeleteFriend(user.id)}>
                                    <FontAwesomeIcon icon={faDeleteLeft} size="lg" style={{ color: "#bb111a" }} />
                                </button> */}
                            </li>
                        ))}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

  
  