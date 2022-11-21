import { signOut } from 'firebase/auth'
import { auth } from 'firebaseConfig'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return <button onClick={handleSignOut}>Logout</button>
}
