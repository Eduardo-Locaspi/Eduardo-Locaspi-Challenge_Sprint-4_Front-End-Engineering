import { useState } from "react"
import FormCadastroPessoa from "../../components/CadastroForms/FormCadastroPessoa"
import FormCadastroPaciente from "../../components/CadastroForms/FormCadastroPaciente"
import FormCadastroLogin from "../../components/CadastroForms/FormCadastroLogin"
import FormCadastroFuncionario from "../../components/CadastroForms/FormCadastroFuncionario"

export default function Cadastro() {
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

    console.log("Enviando para o backend:", dadosCompletos)
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
        if (!res.ok) throw new Error("Erro ao cadastrar");
        return res.text();
      })
      .then((data) => {
        console.log("Cadastro feito com sucesso:", data);
      })
      .catch((err) => {
        console.error("Erro:", err);
      });
  }
  //const navegacao = useNavigate()

  return (
    <div className="bg-red-800 min-h-screen flex flex-col gap-10 items-center p-10">
      <form onSubmit={handleSubmit} className="bg-white rounded-md p-10 w-full max-w-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-800">Cadastro</h1>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-red-700">Você é Paciente ou Funcionário?</h2>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <input type="radio" name="usuario" value="Paciente" checked={usuario === "Paciente"} onChange={(e) => setUsuario(e.target.value)} />
            <label>Paciente</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" name="usuario" value="Funcionário" checked={usuario === "Funcionário"} onChange={(e) => setUsuario(e.target.value)} />
            <label>Funcionário</label>
          </div>
        </div>

        {usuario && (
          <>
            <h2 className="text-xl font-semibold mb-3 mt-8 text-red-700">Dados pessoais</h2>
            <FormCadastroPessoa onChange={setDadosPessoa} />

              {/*Se for Paciente*/} 
            {usuario === "Paciente" && (
              <>
                <h2 className="text-xl font-semibold mt-8 mb-3 text-red-700">Informações médicas</h2>
                <FormCadastroPaciente onChange={setDadosPaciente} />
              </>
            )}

              {/*Se for Funcioario*/} 
            {usuario === "Funcionário" && (
              <>
                <h2 className="text-xl font-semibold mt-8 mb-3 text-red-700">Dados funcionais</h2>
                <FormCadastroFuncionario onChange={setDadosFuncionario} />
              </>
            )}

            <h2 className="text-xl font-semibold mt-8 mb-3 text-red-700">Login de acesso</h2>
            <FormCadastroLogin onChange={setDadosLogin} />

            <button type="submit" className="mt-10 w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-md text-lg font-semibold transition">
              Criar Conta
            </button>

            
          </>
        )}

      </form>
      
    </div>
  )
}
