export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 px-4">
      <h1 className="text-6xl font-extrabold text-red-700 mb-6">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-red-600 mb-4">Ops! Página não encontrada</h2>
      <p className="text-center text-red-500 mb-6 max-w-sm">
        A página que você está procurando não existe ou foi removida. Tente voltar para a página inicial.
      </p>
      <a
        href="/"
        className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-md transition"
      >
        Voltar para Home
      </a>
      <img
        src="https://cdn-icons-png.flaticon.com/512/753/753345.png"
        alt="Página não encontrada"
        className="w-64 h-64 mt-8"
      />
    </div>
  )
}
