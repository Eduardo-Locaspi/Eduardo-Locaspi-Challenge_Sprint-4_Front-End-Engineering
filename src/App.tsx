import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";

export default function App(){

  return(
    <div className="flex flex-col min-h-screen bg-gray-300">
      
      <Cabecalho/>
      <div className="flex-grow">
        <Outlet/>
      </div>
      <Rodape/>
    </div>
  )
}