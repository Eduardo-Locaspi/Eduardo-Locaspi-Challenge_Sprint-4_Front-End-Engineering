import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Home from './routes/Home/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Sobre from './routes/Sobre/index.tsx'



const router = createBrowserRouter([
  { path: "/login", element: <Login/> },
  { path: "/cadastro", element: <Cadastro/> },
  { path: "/", element: <App/>/*App = Home*/, children:[
    {path:"/",element:<Home/>},
    {path:"/integrantes", element:<Integrantes/>},
    {path:"/sobre",element:<Sobre/>},
    {path:"/faq",element:<Faq/>},
    {path:"/contato",element:<Contato/>}
  ] },
  { path: "*", element: <Error/> }, //Erro Page
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
