import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import './loginReg.css'
import backgroundImage from '../../../src/assets/img/png/Rectangle-610.png'
import Login from 'components/sesion/Login'
import Register from 'components/register/Register'

export const LoginReg = (props) => {
  const action = props.action
  return (
    <Container fluid>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          {action === 'login' ? <Login /> : <Register />}
        </Col>
        <Col className="d-none d-xl-block">
          <Image src={backgroundImage} fluid />
        </Col>
      </Row>
    </Container>
  )
}
