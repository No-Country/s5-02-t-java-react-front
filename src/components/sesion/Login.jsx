import React from 'react'
import { useState, useEffect } from 'react'

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from 'config/firebase'

import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

import googleLogo from '../../../src/assets/img/png/google-logo.png'
import { useNavigate } from 'react-router-dom'

function loginWithGoogle() {
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

export default function Login() {
  const [isLoading, setLoading] = useState(false)
  const [isLoadingGoogle, setLoadingGoogle] = useState(false)
  const handleClick = () => setLoading(true)
  const handleClickGoogle = () => setLoadingGoogle(true)

  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState()

  const navigate = useNavigate()

  const handleUser = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (e.target.name === 'correo') {
      try {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        )
        setLoading(false)
        navigate('/')
      } catch (error) {
        setError(error.message)
      }
    }

    if (e.target.name === 'google') {
      try {
        const googleProvider = new GoogleAuthProvider()
        const userCredentials = await signInWithPopup(auth, googleProvider)
        setLoading(false)
        navigate('/')
      } catch (error) {
        setError(error.message)
      }
    }
  }

  // useEffect(() => {
  //   if (isLoading) {
  //     loginWithRedirect().then(() => {
  //       setLoading(false)
  //     })
  //   }
  //   if (isLoadingGoogle) {
  //     loginWithGoogle().then(() => {
  //       setLoadingGoogle(false)
  //     })
  //   }
  // }, [isLoading, isLoadingGoogle, loginWithRedirect])

  return (
    <Card style={{ width: '19rem' }} className="p-2 shadow">
      <Card.Title>
        <h2 className="text-center">Ingresá para realizar tu reserva</h2>
      </Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleUser}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleUser}
            />
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
              name="correo"
              onClick={handleSubmit}
            >
              {isLoading ? 'Ingresando…' : 'Ingresar'}
            </Button>
            <Button
              variant="outline-primary"
              type="submit"
              className=""
              disabled={isLoadingGoogle}
              name="google"
              onClick={handleSubmit}
            >
              <img
                className="register-button-google-icon"
                alt=""
                src={googleLogo}
              />{' '}
              {isLoadingGoogle ? 'Ingresando…' : 'Ingresar con Google'}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}
