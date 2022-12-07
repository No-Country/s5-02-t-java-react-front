import { Route, Routes } from 'react-router-dom'
// import { ProtectedRoute } from './ProtectedRoute'
import NotFound from 'pages/notFound/NotFound'
import Home from 'pages/home/Home'
import Login from 'components/sesion/Login'
import Navbar from 'components/navbar/Navbar'
import Register from 'components/sesion/Register'
import Housedetail from 'pages/housedetail/Housedetail'
import Landing from 'pages/landing/Landing'
import Contact from 'pages/team/Team'

//Aqui iran todas las rutas
function RoutesApp() {
  return (
    <Routes>
      {/* <Route path="admin" element={<ProtectedRoute component={Admin} />}>
      </Route> 
      => aqui las rutas protegidas
      */}

      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/housedetail" element={<Housedetail />} />
        <Route path="/team" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default RoutesApp
