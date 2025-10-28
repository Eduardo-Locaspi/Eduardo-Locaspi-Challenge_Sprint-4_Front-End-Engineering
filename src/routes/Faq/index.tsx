export default function Faq(){

    return(
        <main className="p-10">
            <div className="p-4  flex flex-col items-center gap-4">
                <h1 className=" text-5xl p-10 underline">Perguntas Frequentes</h1>

                
                <div className="bg-red-700  rounded-md w-8/12 border-red-700 border-4">
                    <h2 className="text-2xl px-10 py-3 text-white">1. Como faço para agendar uma consulta pelo chatbot Sophie?</h2>

                    <div className="bg-gray-300 w-full rounded-bl-md rounded-md ">
                        <p className=" px-10 py-2">Basta iniciar a conversa com a Sophie pelo WhatsApp ou Telegram. Ela vai solicitar seus dados básicos e apresentar as opções de datas e horários disponíveis para o agendamento.</p>
                    </div>
                    
                </div>

                <div className="bg-red-700  rounded-md w-8/12 border-red-700 border-4">
                    <h2 className="text-2xl px-10 py-3 text-white">2. Preciso fazer cadastro antes de usar a Sophie?</h2>

                    <div className="bg-gray-300 w-full rounded-bl-md rounded-md ">
                        <p className=" px-10 py-2">Sim. É necessário um pré-cadastro rápido com informações básicas como nome, CPF e contato. Isso garante um atendimento mais seguro e personalizado.</p>
                    </div>
                </div>

                <div className="bg-red-700  rounded-md w-8/12 border-red-700 border-4">
                    <h2 className="text-2xl px-10 py-3 text-white">3. O DashTech pode ser acessado em dispositivos móveis?</h2>

                    <div className="bg-gray-300 w-full rounded-bl-md rounded-md ">
                        <p className=" px-10 py-2">Sim. O painel é 100% responsivo e pode ser acessado tanto no computador quanto em smartphones e tablets.</p>
                    </div>
                </div>

                <div className="bg-red-700  rounded-md w-8/12 border-red-700 border-4">
                    <h2 className="text-2xl px-10 py-3 text-white">4. O DashTech é seguro para armazenar dados sensíveis?</h2>

                    <div className="bg-gray-300 w-full rounded-bl-md rounded-md ">
                        <p className=" px-10 py-2">Sim. Todos os dados são tratados conforme as normas da LGPD, garantindo segurança e confidencialidade.</p>
                    </div>
                </div>

                <div className="bg-red-700  rounded-md w-8/12 border-red-700 border-4">
                    <h2 className="text-2xl px-10 py-3 text-white">5. Posso integrar a Sophie com outros sistemas de saúde já existentes?</h2>

                    <div className="bg-gray-300 w-full rounded-bl-md rounded-md ">
                        <p className=" px-10 py-2">Sim. Nossas soluções são pensadas para se integrar facilmente a prontuários eletrônicos e sistemas hospitalares.</p>
                    </div>
                </div>
                
            </div>
        </main>
    )
}