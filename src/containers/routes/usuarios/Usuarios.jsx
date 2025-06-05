import Usuario from '@/app/usuarios/usuario/Usuario'
import Usuarios from '@/app/usuarios/Usuarios'

const UsuariosRoutes = ({ Routes, Route }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Usuarios />}
      />
      <Route
        path=':usuarioId'
        element={<Usuario />}
      />
    </Routes>
  )
}

export default UsuariosRoutes
