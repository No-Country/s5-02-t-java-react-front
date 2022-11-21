import React, { useEffect, useState } from 'react'
import Footer from 'components/footer/Footer'
import Navbar from 'components/navbar/Navbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'config/firebase'
import Logout from 'components/sesion/Logout'
import Cardhouse from 'components/cardhouse/Cardhouse'
import { Container } from 'react-bootstrap'

const Home = () => {
  const [userInfo, setUserInfo] = useState()

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
    <div>
      <Navbar />

      {userInfo && (
        <>
          <h1>Welcome! {userInfo.displayName || userInfo.email} </h1>
          {(userInfo.reloadUserInfo.photoUrl && (
            <img
              src={userInfo.reloadUserInfo.photoUrl}
              alt={userInfo.email}
            ></img>
          )) || <h1>{userInfo.email[0].toUpperCase()}</h1>}
        </>
      )}

      <Container className="d-flex flex-row flex-wrap align-items-center justify-content-around align-content-center">
        {Array.from({ length: 6 }).map((card) => (
          <Cardhouse />
        ))}
      </Container>

      <Footer />
    </div>
  )
}

export default Home
