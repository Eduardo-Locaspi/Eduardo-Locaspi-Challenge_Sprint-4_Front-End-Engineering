import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-red-50 to-red-100 text-gray-800 min-h-screen px-4 sm:px-6 py-12">
      <section className="max-w-3xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-red-800 mb-4">
          AxcessTech
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Tecnologia e inclusão digital a serviço da saúde pública.
        </p>
      </section>

      <section className="max-w-4xl bg-white shadow-xl rounded-2xl p-6 sm:p-8 mb-10 border border-gray-200">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Sobre o Projeto</h2>
        <p className="text-justify text-gray-700 mb-3 leading-relaxed">
          O <strong>AxcessTech</strong> nasceu com o propósito de auxiliar o <strong>Hospital das Clínicas</strong> da USP na redução da taxa de absenteísmo nas teleconsultas — atualmente em cerca de 20%. A proposta combina tecnologia, acessibilidade e dados para melhorar o uso do portal de teleatendimento.
        </p>
        <p className="text-justify text-gray-700 leading-relaxed">
          Muitos pacientes enfrentam dificuldades ao utilizar os sistemas digitais de agendamento, resultando em ausências e atrasos nos atendimentos. Pensando nisso, o grupo desenvolveu duas soluções principais: um <strong>chatbot inteligente</strong> para apoio aos pacientes e um <strong>dashboard analítico</strong> para a equipe do hospital.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-10 w-full">
        <div className="bg-red-700 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between h-full">
          <h3 className="text-xl font-semibold mb-2">Sophi — Chatbot Assistente</h3>
          <p className="text-sm leading-relaxed">
            A <strong>Sophi</strong> é uma assistente virtual projetada para ajudar pacientes a navegar pelo portal do HC. Ela responde perguntas como <em>"Como acessar minha teleconsulta?"</em> e <em>"Como me preparar para a consulta online?"</em>, tornando o processo mais simples e intuitivo.
          </p>
        </div>

        <div className="bg-red-100 text-red-900 rounded-2xl p-6 shadow-md border border-red-200 flex flex-col justify-between h-full">
          <h3 className="text-xl font-semibold mb-2">DashTech — Painel de Gestão</h3>
          <p className="text-sm leading-relaxed">
            O <strong>DashTech</strong> é um painel visual para os gestores do hospital, apresentando dados sobre acessos, dificuldades dos usuários, taxas de absenteísmo e satisfação. Ele utiliza inteligência artificial para gerar insights e apoiar decisões estratégicas.
          </p>
        </div>
      </div>

      <section className="max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 mb-10 w-full">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Tecnologias Utilizadas</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
          <li>⚙️ <strong>Front-End:</strong> React + TypeScript + TailwindCSS</li>
          <li>☕ <strong>Back-End:</strong> Java (Quarkus)</li>
          <li>🧠 <strong>IA e Análise:</strong> Python + Google Colab</li>
          <li>🗄️ <strong>Banco de Dados:</strong> Oracle SQL Developer</li>
          <li>🧩 <strong>UX e Design:</strong> Astah UML + Figma</li>
        </ul>
      </section>

      <button
        onClick={() => navigate("/login")}
        className="bg-red-700 text-white px-6 sm:px-8 py-3 rounded-lg shadow-md font-semibold hover:bg-red-800 transition w-full sm:w-auto"
      >
        Acessar Plataforma
      </button>
    </main>
  );
}

