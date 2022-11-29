import { Route, Routes } from 'react-router-dom'
// import { ProtectedRoute } from './ProtectedRoute'
import NotFound from 'pages/notFound/NotFound'
import Home from 'pages/home/Home'
import Login from 'components/sesion/Login'
import Navbar from 'components/navbar/Navbar'
// import Register from '../components/register/Register'
// import { LoginReg } from 'pages/loginReg/loginReg'
// import NavBar from 'components/navbar/Navbar'

//Aqui iran todas las rutas
function RoutesApp() {
  return (
    <Routes>
      {/* <Route path="admin" element={<ProtectedRoute component={Admin} />}>
      </Route> 
      => aqui las rutas protegidas
      */}

      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<LoginReg action="login" />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default RoutesApp
