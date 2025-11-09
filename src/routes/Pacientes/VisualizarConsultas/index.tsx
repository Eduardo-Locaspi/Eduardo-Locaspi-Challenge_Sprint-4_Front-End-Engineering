export default function ConsultasAgendadas() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-8">
      <h1 className="text-4xl font-bold text-red-700 mb-4">
        Suas Consultas Agendadas
      </h1>
      <p className="text-gray-700 max-w-xl mb-8">
        Aqui você poderá visualizar e gerenciar suas consultas agendadas.
      </p>
      <div className="bg-gray-100 p-6 rounded-xl shadow w-full max-w-3xl">
        <p className="text-gray-500">Nenhuma consulta agendada no momento.</p>
      </div>
    </main>
  );
}
