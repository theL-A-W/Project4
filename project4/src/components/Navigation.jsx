import Container from 'react-bootstrap/Container'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faMagnifyingGlass, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Navigation (){
    return(
        <div className='navigation'>
      <Navbar bg="light" data-bs-theme="light" fixed="bottom" position="sticky">
        <Container className="nav">
          <Nav id="nav">
            <Nav.Link href="/" id="icon"><FontAwesomeIcon  icon={faHome} size="3x" /></Nav.Link>
            <Nav.Link href="/StockSearch" id="icon" ><FontAwesomeIcon icon={faMagnifyingGlass} size="3x" /></Nav.Link>
            <Nav.Link href="/News"  id="icon"><FontAwesomeIcon icon={faGlobe} size="3x" /></Nav.Link>
            <Nav.Link href="/ProfileSettings"  id="icon"><FontAwesomeIcon icon={faUser} size="3x"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </div>
    )
}