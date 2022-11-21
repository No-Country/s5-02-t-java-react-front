import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'firebaseConfig'

import backgroundImage from '../../../src/assets/img/png/Rectangle-610.png'
import googleLogo from '../../../src/assets/img/png/google-logo.png'
import './Register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState()

  const navigate = useNavigate()

  const handleUser = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      createUserWithEmailAndPassword(auth, user.email, user.password)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className="register-container">
        <div className="register-div">
          <p className="register-title">Registrate y hacé tu reserva</p>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-form-control">
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={handleUser}
              />
            </div>
            <div className="register-form-control">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleUser}
              />
            </div>
            <div className="register-form-control">
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleUser}
              />
            </div>
            <div className="register-button-container">
              <button className="register-button" type="submit">
                Crear cuenta
              </button>
              <button className="register-button-google" type="submit">
                <img
                  className="register-button-google-icon"
                  alt="Logo Google"
                  src={googleLogo}
                />{' '}
                Registrate con Google
              </button>
            </div>
          </form>
        </div>
        <div className="register-img">
          <img alt="backgroundImage" src={backgroundImage} />
        </div>
      </div>
    </>
  )
}

export default Register
