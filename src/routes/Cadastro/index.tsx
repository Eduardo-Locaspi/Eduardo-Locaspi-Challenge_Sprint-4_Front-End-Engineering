import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormCadastroPessoa from "../../components/CadastroForms/FormCadastroPessoa"
import FormCadastroPaciente from "../../components/CadastroForms/FormCadastroPaciente"
import FormCadastroFuncionario from "../../components/CadastroForms/FormCadastroFuncionario"
import FormCadastroLogin from "../../components/CadastroForms/FormCadastroLogin"

export default function Cadastro() {
  const navigate = useNavigate()
  const [dadosPessoa, setDadosPessoa] = useState({})
  const [dadosPaciente, setDadosPaciente] = useState({})
  const [dadosFuncionario, setDadosFuncionario] = useState({})
  const [dadosLogin, setDadosLogin] = useState({})
  const [usuario, setUsuario] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const dadosCompletos =
      usuario === "Paciente"
        ? { pessoa: dadosPessoa, paciente: dadosPaciente, login: dadosLogin }
        : { pessoa: dadosPessoa, funcionario: dadosFuncionario, login: dadosLogin }

    fetch(
      usuario === "Paciente"
        ? "https://challenge-sprint4-java-2025.onrender.com/cadastro/criarContaPaciente"
        : "https://challenge-sprint4-java-2025.onrender.com/cadastro/criarContaFuncionario",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosCompletos),
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao cadastrar")
        return res.text()
      })
      .then((data) => {
        console.log("Cadastro feito com sucesso:", data)
        navigate("/login")
      })
      .catch((err) => {
        console.error("Erro:", err)
      })
  }

  return (
    <div className="bg-red-800 min-h-screen flex flex-col items-center p-6 sm:p-10">
      <form onSubmit={handleSubmit} className="bg-white rounded-md p-6 sm:p-10 w-full max-w-xl shadow-lg flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-red-800">Cadastro</h1>

        <h2 className="text-xl font-semibold text-red-700 mt-6 mb-2">Você é Paciente ou Funcionário?</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            <input type="radio" name="usuario" value="Paciente" checked={usuario === "Paciente"} onChange={(e) => setUsuario(e.target.value)} />
            <label>Paciente</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="usuario" value="Funcionário" checked={usuario === "Funcionário"} onChange={(e) => setUsuario(e.target.value)} />
            <label>Funcionário</label>
          </div>
        </div>

        {usuario && (
          <>
            <h2 className="text-xl font-semibold text-red-700 mt-6">Dados pessoais</h2>
            <FormCadastroPessoa onChange={setDadosPessoa} />

            {usuario === "Paciente" && (
              <>
                <h2 className="text-xl font-semibold text-red-700 mt-6">Informações médicas</h2>
                <FormCadastroPaciente onChange={setDadosPaciente} />
              </>
            )}

            {usuario === "Funcionário" && (
              <>
                <h2 className="text-xl font-semibold text-red-700 mt-6">Dados funcionais</h2>
                <FormCadastroFuncionario onChange={setDadosFuncionario} />
              </>
            )}

            <h2 className="text-xl font-semibold text-red-700 mt-6">Login de acesso</h2>
            <FormCadastroLogin onChange={setDadosLogin} />

            <button type="submit" className="mt-6 w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-md text-lg font-semibold transition">
              Criar Conta
            </button>
          </>
        )}
      </form>
    </div>
  )
}
