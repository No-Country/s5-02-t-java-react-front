import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

import googleLogo from '../../../src/assets/img/png/google-logo.png'

function loginWithGoogle() {
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

export default function Login() {
  const { loginWithRedirect } = useAuth0()
  const [isLoading, setLoading] = useState(false)
  const [isLoadingGoogle, setLoadingGoogle] = useState(false)
  const handleClick = () => setLoading(true)
  const handleClickGoogle = () => setLoadingGoogle(true)

  useEffect(() => {
    if (isLoading) {
      loginWithRedirect().then(() => {
        setLoading(false)
      })
    }
    if (isLoadingGoogle) {
      loginWithGoogle().then(() => {
        setLoadingGoogle(false)
      })
    }
  }, [isLoading, isLoadingGoogle, loginWithRedirect])

  return (
    <Card style={{ width: '19rem' }} className="p-2 shadow">
      <Card.Title>
        <h2 className="text-center">Ingresá para realizar tu reserva</h2>
      </Card.Title>
      <Card.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            Nunca compartiremos su correo electrónico con nadie más.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recuérdame" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button
            variant="dark"
            type="submit"
            className=""
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? 'Ingresando…' : 'Ingresar'}
          </Button>
          <Button
            variant="outline-primary"
            type="submit"
            className=""
            disabled={isLoadingGoogle}
            onClick={!isLoadingGoogle ? handleClickGoogle : null}
          >
            <img className="register-button-google-icon" alt="" src={googleLogo} />{' '}
            {isLoadingGoogle ? 'Ingresando…' : 'Ingresar con Google'}
          </Button>
        </div>
      </Form>
      </Card.Body>
    </Card>
  )
}
