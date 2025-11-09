import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type TypePaciente = {
  idLoginPaciente: number;
  nmUsuario: string;
  senha: string;

  idPaciente: number;
  historicoMedico: string;
  grupoSanguineo: string;
  altura: number;
  peso: number;

  idPessoa: number;
  nmPessoa: string;
  cpf: string;
  rg: string;
  dtNascimento: string;
  sxPessoa: string;
  estadoCivil: string;
  escolaridade: string;
};

export default function EditarPacientes() {
  const [pacientes, setPacientes] = useState<TypePaciente[]>([]);

  useEffect(() => {
    fetch("https://challenge-sprint4-java-2025.onrender.com/funcionario/lista-pacientes")
      .then((resp) => {
        if (!resp.ok) throw new Error("Erro ao buscar pacientes");
        return resp.json();
      })
      .then((data) => setPacientes(data))
      .catch((err) => console.error(err));
  }, []);

const handleDelete = (p: TypePaciente) => {
  fetch("https://challenge-sprint4-java-2025.onrender.com/funcionario/deletar", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      idLoginPaciente: p.idLoginPaciente,
      idPaciente: p.idPaciente,
      idPessoa: p.idPessoa,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Erro ao excluir paciente");
      setPacientes((prev) => prev.filter((x) => x.idLoginPaciente !== p.idLoginPaciente));
    })
    .catch((err) => console.error(err));
};

  return (
    <div className="sm:w-11/12 lg:w-3/4 mt-8 m-auto min-h-screen px-2">
      <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-8">
        Lista de Pacientes
      </h1>

      <div className="flex justify-center sm:justify-start mb-4">
        <Link
          className="p-2.5 bg-green-500 text-white font-bold rounded-md text-sm sm:text-base hover:bg-green-600 transition"
          to={"/cadastro"}
        >
          Inserir Paciente
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-2 border-gray-400 my-5 text-sm sm:text-base">
          <thead>
            <tr className="*:p-2.5 bg-red-800 text-white">
              <th>Nome</th>
              <th>CPF</th>
              <th>RG</th>
              <th>Data de Nascimento</th>
              <th>Grupo Sanguíneo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.length > 0 ? (
              pacientes.map((p) => (
                <tr
                  className="even:bg-gray-200 *:text-center *:p-2.5"
                  key={p.idLoginPaciente}
                >
                  <td>{p.nmPessoa}</td>
                  <td>{p.cpf}</td>
                  <td>{p.rg}</td>
                  <td>{p.dtNascimento}</td>
                  <td>{p.grupoSanguineo}</td>
                  <td>
                    <Link
                      className="m-1 bg-blue-600 text-white px-2 pb-1 rounded-md hover:font-bold text-sm sm:text-base"
                      to={`/funcionarios/editar-pacientes/${p.idLoginPaciente}`}
                    >
                      Editar
                    </Link>
                    <button onClick={() => handleDelete(p)} className="m-1 bg-red-600 text-white px-2 pb-1 rounded-md hover:font-bold text-sm sm:text-base">Excluir</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="text-center text-gray-600 font-semibold p-4"
                >
                  Nenhum paciente encontrado.
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="*:p-2.5 bg-gray-700 text-center text-white">
              <td colSpan={6}>Pacientes cadastrados encontrados!</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
