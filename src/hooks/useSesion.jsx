/* eslint-disable react-hooks/exhaustive-deps */
import { auth } from 'config/firebase'
import {
  cerrarSession,
  loginWhitCorreo,
  loginWhitGoogle,
} from 'features/actions/usersActions'
import { initialSesion, sessionState } from 'features/reducers/usuariosSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function useSesion() {
  const session = useSelector(({ usersStore }) => usersStore.sesion)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoginGoogle = async () => {
    await dispatch(loginWhitGoogle())
    navigate('/home')
  }

  const handleLoginCorreo = async () => {
    await dispatch(loginWhitCorreo())
    navigate('/home')
  }

  const handleLogOut = () => {
    dispatch(cerrarSession())
    navigate('/')
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          sessionState({
            user: {
              token: user.accessToken,
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
            },
            isOnline: true,
            msg: `User logged in as ${user.displayName || user.email}`,
          })
        )
      } else {
        dispatch(sessionState(initialSesion))
      }
    })
  }, [
    session.isOnline,
    session.user.name,
    session.user.email,
    session.user.photo,
  ])

  return {
    isOnline: session.isOnline,
    user: session.user,
    handleLoginCorreo,
    handleLoginGoogle,
    handleLogOut,
  }
}

export default useSesion
