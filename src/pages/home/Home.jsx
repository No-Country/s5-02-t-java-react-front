import React, { useEffect, useState } from 'react'
import Footer from 'components/footer/Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'config/firebase'
import Cardhouse from 'components/cardhouse/Cardhouse'
import { Container } from 'react-bootstrap'
import Filter from 'components/filter/Filter'
import Search from 'components/search/Search'
import Sort from 'components/sort/Sort'
import Paginate from 'components/paginate/Paginate'

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
    <>
      <Container className="d-flex flex-row flex-wrap align-items-center align-content-center justify-content-center">
        <h1>Add Componnets at page home</h1>
        <Search />
        <Filter />
        <Sort />

        {userInfo && (
          <>
            <h1>Welcome! {userInfo.displayName || userInfo.email} </h1>
            {(userInfo.reloadUserInfo.photoUrl && (
              <img
                src={userInfo.reloadUserInfo.photoUrl}
                alt={userInfo.email}
              ></img>
            )) || (
              <h1 className="fw-bold text-primary">
                {userInfo.email.substr(0, 2).toUpperCase()}
              </h1>
            )}
          </>
        )}

        <Container className="d-flex flex-row flex-wrap align-items-center justify-content-around align-content-center">
          {Array.from({ length: 6 }).map((card) => (
            <Cardhouse />
          ))}
        </Container>
        <Paginate />
      </Container>
      <Footer />
    </>
  )
}

export default Home
