


import { useState } from "react"
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type Login = {
  usuario: string,
  senha: string
}


export default function FormLogin() {

  const {signin} = useAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState<Login>({ usuario: "", senha: "" })
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
            if(!login.usuario || !login.senha){
            setError('Preencha todos os campos.')
            return
        }
        const res = signin(login.usuario, login.senha)
        if(res){
            setError(res)
            setLogin({ usuario: "", senha: "" })
            return
        }
        navigate('/funcionarios/editarPacientes')
    console.log("Envio para o backend:", login.usuario, "e", login.senha) /*AQUI acho que vai o fetch depois com a API*/
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center w-full max-w-[280px]">
      <span className="block m-3 text-red-500 text-center">{error}</span>
      <input className="bg-neutral-800 text-white placeholder-gray-400 border border-gray-600 rounded-md w-full px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
        type="text" placeholder="Usuário" onChange={handleChange} value={login.usuario} name="usuario"
      />

      <input className="bg-neutral-800 text-white placeholder-gray-400 border border-gray-600 rounded-md w-full px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
        type="password" placeholder="Senha" onChange={handleChange} value={login.senha} name="senha"
      />

      <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-semibold w-40 text-base py-2 rounded-md mt-2 transition">Entrar</button>
    </form>
  )
}
