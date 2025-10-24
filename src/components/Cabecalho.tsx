import logo from "../../public/axcessTech_Logo_white.png"
import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        <>
            <header className="h-16 bg-red-400 flex items-center px-6">
                <Link to={"/"} className="flex items-center"><img src={logo} className="rounded-2xl h-12 w-32 shadow-md "/></Link>
            </header>
            <nav className="flex bg-gray-200 justify-around items-center h-8">
                <Link to={"/"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5">Home</Link>
                <Link to={"/integrantes"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5" >Integrantes</Link>
                <Link to={"/sobre"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5">Sobre</Link>
                <Link to={"/faq"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5">FAQ</Link>
                <Link to={"/login"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5">Paciente</Link>
                <Link to={"/login"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5">Funcionário</Link>
            </nav>
        </>
    )
}