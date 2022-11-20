import React from 'react'
import backgroundImage from '../../../src/assets/img/png/Rectangle-610.png'
import googleLogo from '../../../src/assets/img/png/google-logo.png'
import "./Register.css";

const register = () => {
  return (
    <>
    <div className="register-container">  
        <div className="register-div">
          <p className="register-title">Registrate y hacé tu reserva</p>
          <form className="register-form">
            <div className="register-form-control">
              <input type="text" placeholder="Nombre" name="name" />
            </div>
            <div className="register-form-control">
              <input type="email" placeholder="Email" name="email" />
            </div>   
            <div className="register-form-control">
              <input type="password" placeholder="Contraseña" name="password" />
            </div>   
            <div className='register-button-container'>
            <button className="register-button" type="submit" >Crear cuenta</button>
            <button className="register-button-google" type="submit" >
            <img className="register-button-google-icon" alt='Logo Google' src={googleLogo}/> Registrate con Google
            </button>      
            </div>
          </form>
        </div>
      <div className="register-img">
        <img alt='backgroundImage' src={backgroundImage}/>
      </div> 
      </div>
    </>
    
  )
}

export default register