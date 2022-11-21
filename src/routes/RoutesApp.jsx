import { Route, Routes } from 'react-router-dom'
// import { ProtectedRoute } from './ProtectedRoute'
import NotFound from 'pages/notFound/NotFound'
import Home from 'pages/home/Home'
import Register from '../components/register/Register'

//Aqui iran todas las rutas
function RoutesApp() {
  return (
    <Routes>
      {/* <Route path="admin" element={<ProtectedRoute component={Admin} />}>
      </Route> 
      => aqui las rutas protegidas
      */}

      <Route path="/" element={<Home />}>
        {/* hijos del navbar => todas las paginas */}
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp
