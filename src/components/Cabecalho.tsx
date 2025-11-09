import logo from "../assets/axcessTech_Logo_white.png"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <>
      <header className="h-16 bg-red-400 flex items-center justify-between px-4 sm:px-6">
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="rounded-2xl h-12 w-32 shadow-md" alt="Logo" />
        </Link>
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuAberto ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </header>

      {menuAberto && (
        <nav className="sm:hidden flex flex-col bg-gray-200 p-4">
          <Link to={"/"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-2">Home</Link>
          <Link to={"/integrantes"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-2">Integrantes</Link>
          <Link to={"/sobre"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-2">Sobre</Link>
          <Link to={"/faq"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-2">FAQ</Link>
          <Link to={"/login"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-2">Login</Link>
        </nav>
      )}

      <nav className="hidden sm:flex bg-gray-200 justify-around items-center h-8">
        <Link to={"/"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5">Home</Link>
        <Link to={"/integrantes"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5">Integrantes</Link>
        <Link to={"/sobre"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5">Sobre</Link>
        <Link to={"/faq"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5">FAQ</Link>
        <Link to={"/login"} className="text-gray-700 font-semibold hover:text-red-500 transition-colors duration-200 m-5">Login</Link>
      </nav>
    </>
  )
}
