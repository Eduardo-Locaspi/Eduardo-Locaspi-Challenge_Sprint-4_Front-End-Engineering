import dudu from '../../assets/desenvolvedor_eduardo.jpg'
import natan from '../../assets/natan.jpg'
import victor from '../../assets/victor.png'
import linkedinicon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'

export default function Integrantes() {
  return (
    <main className="py-10 px-6 bg-gradient-to-b from-red-50 to-white min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-red-800 mb-12">
        Desenvolvedores
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <section className="bg-white text-gray-900 rounded-2xl shadow-lg border border-red-200 hover:shadow-red-200 transition duration-300">
          <div className="flex flex-col items-center p-6">
            <img
              src={dudu}
              alt="Foto do desenvolvedor Eduardo Locaspi"
              className="w-40 h-40 object-cover rounded-full border-4 border-red-500 mb-4"
            />
            <h2 className="text-2xl font-bold text-red-700">Eduardo Locaspi</h2>
            <h3 className="text-gray-600">RM561713</h3>
            <h3 className="text-gray-600 mb-4">1TDSPI</h3>

            <div className="flex gap-5 mt-2">
              <a
                href="https://www.linkedin.com/in/eduardo-locaspi-14119934b/"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <img src={linkedinicon} alt="LinkedIn" className="w-9" />
              </a>
              <a
                href="https://github.com/Eduardo-Locaspi"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <img src={githubIcon} alt="GitHub" className="w-9" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white text-gray-900 rounded-2xl shadow-lg border border-red-200 hover:shadow-red-200 transition duration-300">
          <div className="flex flex-col items-center p-6">
            <img
              src={natan}
              alt="Foto do desenvolvedor Natan Moraes"
              className="w-40 h-40 object-cover rounded-full border-4 border-red-500 mb-4"
            />
            <h2 className="text-2xl font-bold text-red-700">Natan Moraes</h2>
            <h3 className="text-gray-600">RM564992</h3>
            <h3 className="text-gray-600 mb-4">1TDSPI</h3>

            <div className="flex gap-5 mt-2">
              <a
                href="https://www.linkedin.com/in/natanfreitasdemoraes/"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <img src={linkedinicon} alt="LinkedIn" className="w-9" />
              </a>
              <a
                href="https://github.com/nfreitas2000"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <img src={githubIcon} alt="GitHub" className="w-9" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white text-gray-900 rounded-2xl shadow-lg border border-red-200 hover:shadow-red-200 transition duration-300">
          <div className="flex flex-col items-center p-6">
            <img
              src={victor}
              alt="Foto do desenvolvedor Victor Alves"
              className="w-40 h-40 object-cover rounded-full border-4 border-red-500 mb-4"
            />
            <h2 className="text-2xl font-bold text-red-700">Victor Alves</h2>
            <h3 className="text-gray-600">RM561833</h3>
            <h3 className="text-gray-600 mb-4">1TDSPI</h3>

            <div className="flex gap-5 mt-2">
              <a
                href="https://www.linkedin.com/in/victor-alves-10587b2b6/"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <img src={linkedinicon} alt="LinkedIn" className="w-9" />
              </a>
              <a
                href="https://github.com/victoralves10"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <img src={githubIcon} alt="GitHub" className="w-9" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
