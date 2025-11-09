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

      <div className="overflow-x-auto w-full">
        <table className="w-full border-2 border-gray-400 my-5 text-sm sm:text-base table-auto">
          <thead>
            <tr className="bg-red-800 text-white text-center">
              <th className="px-2 sm:px-4 py-2">Nome</th>
              <th className="px-2 sm:px-4 py-2">CPF</th>
              <th className="px-2 sm:px-4 py-2">RG</th>
              <th className="px-2 sm:px-4 py-2">Data de Nascimento</th>
              <th className="px-2 sm:px-4 py-2">Grupo Sanguíneo</th>
              <th className="px-2 sm:px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.length > 0 ? (
              pacientes.map((p) => (
                <tr key={p.idLoginPaciente} className="even:bg-gray-200 text-center">
                  <td className="px-2 sm:px-4 py-1 sm:py-2">{p.nmPessoa}</td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2">{p.cpf}</td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2">{p.rg}</td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2">{p.dtNascimento}</td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2">{p.grupoSanguineo}</td>
                  <td className="flex flex-col sm:flex-row justify-center gap-2 px-2 sm:px-4 py-1 sm:py-2">
                    <Link
                      className="bg-blue-600 text-white px-2 py-1 rounded-md hover:font-bold text-sm sm:text-base"
                      to={`/funcionarios/editar-pacientes/${p.idLoginPaciente}`}
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(p)}
                      className="bg-red-600 text-white px-2 py-1 rounded-md hover:font-bold text-sm sm:text-base"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center text-gray-600 font-semibold py-4">
                  Nenhum paciente encontrado.
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="bg-gray-700 text-center text-white">
              <td colSpan={6} className="py-2 sm:py-3">
                Pacientes cadastrados encontrados!
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
