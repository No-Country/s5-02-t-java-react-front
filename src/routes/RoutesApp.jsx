import { Route, Routes } from 'react-router-dom'
// import { ProtectedRoute } from './ProtectedRoute'
import NotFound from 'pages/notFound/NotFound'

//Aqui iran todas las rutas
function RoutesApp() {
  return (
    <Routes>
      {/* <Route path="admin" element={<ProtectedRoute component={Admin} />}>
      </Route> 
      => aqui las rutas protegidas
      */}

      <Route path="/" element={<h1>navbar</h1>}>
        {/* hijos del navbar => todas las paginas */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp
