import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type Login = {
  usuario: string;
  senha: string;
};

export default function FormLogin() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState<Login>({ usuario: "", senha: "" });
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState<"Paciente" | "Funcionario" | "">("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!login.usuario || !login.senha || !usuario) {
      setError("Preencha todos os campos e selecione o tipo de usuário.");
      return;
    }

    const res = await signin(login.usuario, login.senha, usuario);

    if (res) {
      setError(res);
    } else {
      navigate(
        usuario === "Funcionario"
          ? "/funcionarios/editar-pacientes"
          : "/paciente/perfil"
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center w-full max-w-[280px]"
    >
      <div className="flex gap-5 text-white">
        <div className="flex gap-2">
          <input
            type="radio"
            name="usuario"
            value="Paciente"
            checked={usuario === "Paciente"}
            onChange={(e) => setUsuario(e.target.value as "Paciente")}
          />
          <label>Paciente</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            name="usuario"
            value="Funcionario"
            checked={usuario === "Funcionario"}
            onChange={(e) => setUsuario(e.target.value as "Funcionario")}
          />
          <label>Funcionário</label>
        </div>
      </div>

      <span className="block m-3 text-red-500 text-center">{error}</span>

      <input
        className="bg-neutral-800 text-white placeholder-gray-400 border border-gray-600 rounded-md w-full px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
        type="text"
        placeholder="Usuário"
        onChange={handleChange}
        value={login.usuario}
        name="usuario"
      />

      <input
        className="bg-neutral-800 text-white placeholder-gray-400 border border-gray-600 rounded-md w-full px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
        type="password"
        placeholder="Senha"
        onChange={handleChange}
        value={login.senha}
        name="senha"
      />

      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold w-40 text-base py-2 rounded-md mt-2 transition"
      >
        Entrar
      </button>
    </form>
  );
}
