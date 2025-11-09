import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Home from './routes/Home/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Error from './routes/Error/index.tsx'

import { AuthProvider } from './context/auth.tsx'
import EditarPacientes from './routes/Funcionario/EditarPacientes/index.tsx'
import { PrivateRoute } from './components/PrivateRoute.tsx'
import MarcarConsulta from './routes/Pacientes/MarcarConsulta/index.tsx'
import FormEdicao from './routes/Funcionario/FormularioEdicao/index.tsx'
import PacienteHome from './routes/Pacientes/PacienteInicio/index.tsx'
import ConsultasAgendadas from './routes/Pacientes/VisualizarConsultas/index.tsx'

const router = createBrowserRouter([
  { path: "/login", element: <Login/> },
  { path: "/cadastro", element: <Cadastro/> },
  { path: "/", element: <App/>, children:[
    {path:"/",element:<Home/>},
    {path:"/integrantes", element:<Integrantes/>},
    {path:"/sobre",element:<Sobre/>},
    {path:"/faq",element:<Faq/>},
    {path:"/funcionarios/editar-pacientes", element:<PrivateRoute Item={EditarPacientes} allowedRoles={["Funcionario"]}/>},
    {path:"/funcionarios/editar-pacientes/:id", element:<PrivateRoute Item={FormEdicao} allowedRoles={["Funcionario"]}/>},
    {path:"/paciente/agendar-consulta", element:<PrivateRoute Item={MarcarConsulta} allowedRoles={["Paciente"]}/>},
    {path:"/paciente/home", element:<PrivateRoute Item={PacienteHome} allowedRoles={["Paciente"]}/>},
    {path:"/paciente/consultas-agendadas", element:<PrivateRoute Item={ConsultasAgendadas} allowedRoles={["Paciente"]}/>},

  ] },
  { path: "*", element: <Error/> },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)