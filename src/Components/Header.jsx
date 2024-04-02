import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div> 
        <Navbar className="bg-info">
    <Container>
      <Navbar.Brand >
      <Link to={'/'}  style={{color:'white',textDecoration:'none'}} >
      <i class="fa-solid fa-photo-film me-2"></i>
        Media-Player-App
      </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header