import { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports'

export const Profile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if ('isLoading') {
      return <div>Loading...</div>
    }
    if ('isAuthenticated') {
    }
  }, [dispatch])

  return (
    <div>
      {/* <img src={user.picture} alt={user.name} /> */}
      {/* <h2>{user.name}</h2>
      <p>Email: {user.email}</p> */}
    </div>
  )
}
