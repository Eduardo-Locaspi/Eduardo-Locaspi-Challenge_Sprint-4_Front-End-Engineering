import logo from "../../public/axcessTech_Logo-removebg-preview.png"
import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        <>
            <header className="h-32 bg-red-400 flex items-center px-6">
                <Link to={"/"} className="flex items-center"><img src={logo} className="bg-white rounded-2xl p-3 h-24 w-auto shadow-md "/></Link>
            </header>
            <nav className="flex bg-gray-200 justify-around items-center h-12">
                <Link to={"/"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200">Home</Link>
                <Link to={"/integrantes"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200" >Integrantes</Link>
                <Link to={"/sobre"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200">Sobre</Link>
                <Link to={"/faq"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200">FAQ</Link>
                <Link to={"/login"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200">Paciente</Link>
                <Link to={"/login"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200">Funcionário</Link>
            </nav>
        </>
    )
}