import Container from 'react-bootstrap/Container'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faMagnifyingGlass, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Navigation (){
    return(
        <div className='navigation'>
      <Navbar bg="light" data-bs-theme="light"fixed="bottom" position="sticky">
        <Container className="nav">
          <Nav id="nav">
            <Nav.Link href="/"><FontAwesomeIcon id="icon" icon={faHome} size="3x" /></Nav.Link>
            <Nav.Link href="/StockSearch"><FontAwesomeIcon id="icon"  icon={faMagnifyingGlass} size="3x" /></Nav.Link>
            <Nav.Link href="/News"><FontAwesomeIcon id="icon"  icon={faGlobe} size="3x" /></Nav.Link>
            <Nav.Link href="/ProfileSettings"><FontAwesomeIcon id="icon"  icon={faUser} size="3x"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </div>
    )
}