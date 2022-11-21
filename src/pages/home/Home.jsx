import React, { useEffect, useState } from 'react'
import Footer from 'components/footer/Footer'
import Navbar from 'components/navbar/Navbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebaseConfig'
import Logout from 'components/sesion/Logout'
import Cardhouse from 'components/cardhouse/Cardhouse'

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

          <Logout />
        </>
      )}
      <Cardhouse />
      <Footer />
    </div>
  )
}

export default Home
