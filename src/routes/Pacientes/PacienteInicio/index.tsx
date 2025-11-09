import { useNavigate } from "react-router-dom";
import logo from "../../../assets/axcessTech Icon.png";

export default function PacienteHome() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-50 to-white text-center px-6">
      <img src={logo} alt="Logo AxcessTech" className="w-40 mb-6" />

      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-800 mb-4">
        Bem-vindo à sua área do paciente
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        Aqui você pode agendar suas consultas com facilidade e acompanhar todos
        os seus compromissos médicos em um só lugar. Nosso sistema foi pensado
        para garantir praticidade, segurança e rapidez no seu atendimento.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => navigate("/paciente/agendar-consulta")}
          className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition"
        >
          📅 Agendar Consulta
        </button>
        <button
          onClick={() => navigate("/paciente/consultas-agendadas")}
          className="bg-gray-200 text-red-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          🩺 Ver Consultas Agendadas
        </button>
      </div>
    </main>
  );
}
