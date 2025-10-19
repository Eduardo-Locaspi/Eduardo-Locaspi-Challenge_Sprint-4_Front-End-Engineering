import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Error from './pages/Error.tsx'
import Cadastro from './pages/Cadastro.tsx'
import Integrantes from './pages/Integrantes.tsx'
import Sobre from './pages/Sobre.tsx'
import Faq from './pages/Faq.tsx'
import Contato from './pages/COntato.tsx'
import Home from './pages/Home.tsx'



const router = createBrowserRouter([
  { path: "/login", element: <Login/> },
  { path: "/cadastro", element: <Cadastro/> },
  { path: "/", element: <App/>/*App = Home*/, children:[
    {path:"/",element:<Home/>},
    {path:"integrantes", element:<Integrantes/>},
    {path:"sobre",element:<Sobre/>},
    {path:"faq",element:<Faq/>},
    {path:"contato",element:<Contato/>}
  ] },
  { path: "*", element: <Error/> }, //Erro Page
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
