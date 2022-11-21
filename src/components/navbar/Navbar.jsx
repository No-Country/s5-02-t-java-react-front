import Logout from 'components/sesion/Logout'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'config/firebase'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

// LOGO
import logo from '../../assets/img/logo.jpg'

function NavBar() {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid
        console.log(user)
        setUserInfo(user)
        // ...
      } else {
        console.log('user deslogeado')
        setUserInfo(null)
        // User is signed out
        // ...
      }
    })
  }, [userInfo])

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar
          key={expand}
          bg="white"
          variant="white"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} height="20" alt="Logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Navbar.Brand href="#home">
                  <img src={logo} height="20" alt="Logo"></img>
                </Navbar.Brand>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 bolder">
                  <Nav.Link href="#ReservasOnline" active>
                    Reservas Online
                  </Nav.Link>
                  <Nav.Link href="#Contacto" active>
                    Contacto
                  </Nav.Link>

                  {userInfo === null ? (
                    <>
                      <Nav.Link href="/login" active>
                        Acceder
                      </Nav.Link>
                      <Nav.Link
                        href="/register"
                        style={{ color: 'var(--bs-blue)' }}
                      >
                        Registrarse
                      </Nav.Link>
                    </>
                  ) : (
                    <Logout />
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavBar
