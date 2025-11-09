export default function MarcarConsulta() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-8">
      <h1 className="text-4xl font-bold text-red-700 mb-4">
        Agendar Nova Consulta
      </h1>
      <p className="text-gray-700 max-w-xl mb-8">
        Em breve você poderá selecionar o tipo de consulta, data e horário
        desejados.
      </p>
      <button className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
        Nova Consulta
      </button>
    </main>
  );
}
