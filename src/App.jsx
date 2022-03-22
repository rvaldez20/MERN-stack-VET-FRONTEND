import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/login';
import Registrar from './pages/Registrar';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import OlvidePassword from './pages/OlvidePassword';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='/registrar' element={<Registrar />} />
          <Route path='/olvide-password' element={<OlvidePassword />} />
          <Route path='/confirmar/:id' element={<ConfirmarCuenta />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
