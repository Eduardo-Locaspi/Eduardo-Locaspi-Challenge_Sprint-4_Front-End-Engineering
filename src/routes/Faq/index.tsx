export default function Faq() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-white p-4 sm:p-10 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-800 mb-8 sm:mb-10 text-center">
        Perguntas Frequentes
      </h1>

      <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-4xl">
        {[
          {
            pergunta: "Como faço para agendar uma consulta pelo chatbot Sophie?",
            resposta:
              "Basta iniciar a conversa com a Sophie pelo WhatsApp ou Telegram. Ela vai solicitar seus dados básicos e apresentar as opções de datas e horários disponíveis para o agendamento.",
          },
          {
            pergunta: "Preciso fazer cadastro antes de usar a Sophie?",
            resposta:
              "Sim. É necessário um pré-cadastro rápido com informações básicas como nome, CPF e contato. Isso garante um atendimento mais seguro e personalizado.",
          },
          {
            pergunta: "O DashTech pode ser acessado em dispositivos móveis?",
            resposta:
              "Sim. O painel é 100% responsivo e pode ser acessado tanto no computador quanto em smartphones e tablets.",
          },
          {
            pergunta: "O DashTech é seguro para armazenar dados sensíveis?",
            resposta:
              "Sim. Todos os dados são tratados conforme as normas da LGPD, garantindo segurança e confidencialidade.",
          },
          {
            pergunta:
              "Posso integrar a Sophie com outros sistemas de saúde já existentes?",
            resposta:
              "Sim. Nossas soluções são pensadas para se integrar facilmente a prontuários eletrônicos e sistemas hospitalares.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full bg-white border border-red-200 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
          >
            <h2 className="text-lg sm:text-2xl font-semibold bg-red-700 text-white px-4 sm:px-8 py-3 sm:py-4">
              {index + 1}. {item.pergunta}
            </h2>
            <div className="bg-gray-100 px-4 sm:px-8 py-3 sm:py-4 text-gray-700 text-sm sm:text-[17px] leading-relaxed">
              {item.resposta}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
