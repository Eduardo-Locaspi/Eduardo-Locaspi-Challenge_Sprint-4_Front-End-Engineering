import logo from "../../assets/axcessTech Icon.png";

export default function Sobre() {
  return (
    <main className="w-full bg-gradient-to-b from-red-50 to-white min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <div className="flex flex-col items-center gap-6 mb-10">
        <img
          src={logo}
          alt="Logo AxcessTech"
          className="w-28 sm:w-36 drop-shadow-lg"
        />
        <h1 className="text-5xl font-extrabold text-red-800 text-center">
          Sobre Nós
        </h1>
      </div>

      <div className="max-w-4xl bg-white shadow-lg border border-red-100 rounded-2xl p-10 text-[18px] text-gray-700 leading-relaxed space-y-6 text-justify">
        <p>
          Na <span className="text-red-700 font-semibold">AxcessTech</span>,
          acreditamos que a tecnologia é uma ponte poderosa para transformar a
          saúde e torná-la mais humana, acessível e eficiente. Nosso compromisso
          com a inovação em saúde vai além de criar soluções digitais: buscamos
          compreender as necessidades reais de pacientes, profissionais e
          instituições para desenvolver ferramentas que facilitem o cuidado,
          promovam autonomia e melhorem a experiência de todos no ecossistema da
          saúde.
        </p>
        <p>
          Combinamos{" "}
          <span className="text-red-700">
            inteligência artificial
          </span>
          ,{" "}
          <span className="text-red-700">
            análise de dados
          </span>{" "}
          e{" "}
          <span className="text-red-700">
            design centrado no usuário
          </span>{" "}
          para entregar produtos como{" "}
          <span className="text-red-700 font-semibold">assistentes virtuais</span>{" "}
          e{" "}
          <span className="text-red-700 font-semibold">
            dashboards inteligentes
          </span>
          , sempre guiados pelo propósito de aproximar pessoas e tecnologia.
        </p>
        <p>
          Na <span className="text-red-700 font-semibold">AxcessTech</span>,
          inovamos para cuidar, porque acreditamos que cada avanço tecnológico
          deve refletir em mais qualidade de vida e em uma saúde cada vez mais
          acessível para todos.
        </p>
      </div>

      <div className="mt-10">
        <a
          href="mailto:axcesstech.suporte@gmail.com"
          className="text-white bg-red-600 hover:bg-red-700 px-10 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          Fale Conosco
        </a>
      </div>
    </main>
  );
}
