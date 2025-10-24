import { useState } from "react"
import FormCadastroPessoa from "../../components/CadastroForms/FormCadastroPessoa"
import FormCadastroPaciente from "../../components/CadastroForms/FormCadastroPaciente"
import FormCadastroLogin from "../../components/CadastroForms/FormCadastroLogin"

export default function Cadastro() {
  const [dadosPessoa, setDadosPessoa] = useState({})
  const [dadosPaciente, setDadosPaciente] = useState({})
  const [dadosLogin, setDadosLogin] = useState({})

  const handleSubmit = () => {
    const dadosCompletos = { pessoa: dadosPessoa, paciente: dadosPaciente, login: dadosLogin }
    console.log("Enviando para o backend:", dadosCompletos)
    /*API Aqui depois*/
  }

  return (
    <div className="bg-red-800 min-h-screen flex flex-col gap-10 items-center p-10">
      <div className="bg-white rounded-md p-10 w-full max-w-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-800">Cadastro de Paciente</h1>

        <h2 className="text-xl font-semibold mb-3 text-red-700">Dados pessoais</h2>
        <FormCadastroPessoa onChange={setDadosPessoa} />

        <h2 className="text-xl font-semibold mt-8 mb-3 text-red-700">Informações médicas</h2>
        <FormCadastroPaciente onChange={setDadosPaciente} />

        <h2 className="text-xl font-semibold mt-8 mb-3 text-red-700">Login de acesso</h2>
        <FormCadastroLogin onChange={setDadosLogin} />

        <button onClick={handleSubmit} className="mt-10 w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-md text-lg font-semibold transition"
>Criar Conta</button>
      </div>
    </div>
  )
}
