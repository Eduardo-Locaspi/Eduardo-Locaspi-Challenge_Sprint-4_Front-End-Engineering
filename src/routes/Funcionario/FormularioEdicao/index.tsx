import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

type TypePacienteAtualizar = {
  idLoginPaciente?: number;
  idPaciente?: number;
  idPessoa?: number;

  nmUsuario: string;
  senha: string;

  historicoMedico: string;
  grupoSanguineo: string;
  altura: number;
  peso: number;

  nmPessoa: string;
  cpf: string;
  rg: string;
  dtNascimento: string;
  sxPessoa: string;
  estadoCivil: string;
  escolaridade: string;
};

export default function FormEdicao() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pacienteAtualizar, setPacienteAtualizar] = useState<TypePacienteAtualizar>({
    idLoginPaciente: 0,
    idPaciente: 0,
    idPessoa: 0,
    nmUsuario: "",
    senha: "",
    historicoMedico: "",
    grupoSanguineo: "",
    altura: 0,
    peso: 0,
    nmPessoa: "",
    cpf: "",
    rg: "",
    dtNascimento: "",
    sxPessoa: "",
    estadoCivil: "",
    escolaridade: "",
  });

  const metodo = id ? "PUT" : "POST";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPacienteAtualizar({ ...pacienteAtualizar, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const paciente = {
      ...pacienteAtualizar,
      altura: Number(pacienteAtualizar.altura),
      peso: Number(pacienteAtualizar.peso),
    };
    console.log(paciente)

    fetch(`https://challenge-sprint4-java-2025.onrender.com/funcionario/atualizar-paciente`, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paciente),
    })
      .then(() => navigate("/funcionarios/editar-pacientes"))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (id) {
      fetch(`https://challenge-sprint4-java-2025.onrender.com/funcionario/recupera-por-id/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
          const dataFormatada = data.dtNascimento
            ? data.dtNascimento.split(" ")[0]
            : "";
          setPacienteAtualizar({ ...data, dtNascimento: dataFormatada });
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto my-10 px-5">
      <h1 className="text-black text-3xl sm:text-4xl font-bold text-center mb-10">
        {id ? "Editar Paciente" : "Cadastrar Paciente"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-300 bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-8"
      >

        <div>
          <h2 className="text-lg font-semibold text-red-700 mb-3 border-b-2 border-red-300 pb-1">
            Identificadores
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                ID Login Paciente
              </label>
              <input
                className="border border-gray-300 rounded-md p-2 w-full bg-gray-100 cursor-not-allowed"
                type="number"
                value={pacienteAtualizar.idLoginPaciente || ""}
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                ID Paciente
              </label>
              <input
                className="border border-gray-300 rounded-md p-2 w-full bg-gray-100 cursor-not-allowed"
                type="number"
                value={pacienteAtualizar.idPaciente || ""}
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                ID Pessoa
              </label>
              <input
                className="border border-gray-300 rounded-md p-2 w-full bg-gray-100 cursor-not-allowed"
                type="number"
                value={pacienteAtualizar.idPessoa || ""}
                disabled
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-red-700 mb-3 border-b-2 border-red-300 pb-1">
            Dados de Login
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="text"
              name="nmUsuario"
              value={pacienteAtualizar.nmUsuario}
              placeholder="Nome de Usuário"
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="password"
              name="senha"
              value={pacienteAtualizar.senha}
              placeholder="Senha"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-red-700 mb-3 border-b-2 border-red-300 pb-1">
            Dados Pessoais
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              name="nmPessoa"
              value={pacienteAtualizar.nmPessoa}
              placeholder="Nome Completo"
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              name="cpf"
              value={pacienteAtualizar.cpf}
              placeholder="CPF"
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              name="rg"
              value={pacienteAtualizar.rg}
              placeholder="RG"
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 rounded-md p-2"
              type="date"
              name="dtNascimento"
              value={pacienteAtualizar.dtNascimento}
              onChange={handleChange}
            />

            <select
              className="border border-gray-300 rounded-md p-2"
              name="sxPessoa"
              value={pacienteAtualizar.sxPessoa}
              onChange={handleChange}
              required
            >
              <option value="">Sexo</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="I">Intersexo</option>
            </select>


            <select
              className="border border-gray-300 rounded-md p-2"
              name="escolaridade"
              value={pacienteAtualizar.escolaridade}
              onChange={handleChange}
              required
            >
              <option value="">Escolaridade</option>
              <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
              <option value="Ensino Fundamental Cursando">Ensino Fundamental Cursando</option>
              <option value="Ensino Fundamental Concluído">Ensino Fundamental Concluído</option>
              <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
              <option value="Ensino Médio Cursando">Ensino Médio Cursando</option>
              <option value="Ensino Médio Concluído">Ensino Médio Concluído</option>
              <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
              <option value="Ensino Superior Cursando">Ensino Superior Cursando</option>
              <option value="Ensino Superior Concluído">Ensino Superior Concluído</option>
              <option value="Pós-Graduação Incompleto">Pós-Graduação Incompleto</option>
              <option value="Pós-Graduação Cursando">Pós-Graduação Cursando</option>
              <option value="Pós-Graduação Concluído">Pós-Graduação Concluído</option>
            </select>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-red-700 mb-3 border-b-2 border-red-300 pb-1">
            Dados Médicos
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              name="historicoMedico"
              value={pacienteAtualizar.historicoMedico || ""}
              placeholder="Histórico Médico"
              onChange={handleChange}
            />

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Tipo Sanguíneo
              </label>
              <select
                className="border border-gray-300 rounded-md p-2 w-full"
                name="grupoSanguineo"
                value={pacienteAtualizar.grupoSanguineo}
                onChange={handleChange}
                required
              >
                <option value="">Selecione o tipo sanguíneo</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <input
              className="border border-gray-300 rounded-md p-2"
              type="number"
              name="altura"
              value={pacienteAtualizar.altura}
              placeholder="Altura (cm)"
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 rounded-md p-2"
              type="number"
              name="peso"
              value={pacienteAtualizar.peso}
              placeholder="Peso (kg)"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mt-6">
          <button
            className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition"
            type="submit"
          >
            Salvar
          </button>
          <Link
            className="bg-red-500 text-white font-semibold py-2 px-6 rounded-lg text-center hover:bg-red-600 transition"
            to="/funcionarios/editar-pacientes"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
