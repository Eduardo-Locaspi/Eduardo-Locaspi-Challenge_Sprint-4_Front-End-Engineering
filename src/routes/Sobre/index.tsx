

export default function Sobre(){

    return(
        <main className="w-full ">
            <div className="p-4 text-center">
                <h1 className="text-5xl underline p-10">Sobre nós</h1>

                <div className="p-4 flex"> {/*Paragrafo e imagem*/}

                    <div className="w-6/12 text-[18px] text-gray-500 p-4"> {/*Separa os paragrafos*/ }

                        <p className="p-1.5">Na <span className="text-black">AxcessTech</span>, acreditamos que a tecnologia é uma ponte poderosa para transformar a saúde e torná-la mais humana, acessível e eficiente. Nosso compromisso com a inovação em saúde vai além de criar soluções digitais: buscamos compreender as necessidades reais de pacientes, profissionais e instituições para desenvolver ferramentas que facilitem o cuidado, promovam autonomia e melhorem a experiência de todos no ecossistema da saúde.</p>
                        <p className="p-1.5">Combinamos <span className="underline">inteligência artificial</span>, <span className="underline">análise de dados</span> e <span className="underline">design centrado no usuário</span> para entregar produtos como <span className="text-black">assistentes virtuais</span> e <span className="text-black">dashboards inteligentes</span>, sempre guiados pelo propósito de aproximar pessoas e tecnologia.</p>
                        <p className="p-1.5">Na <span className="text-black">AxcessTech</span>, inovamos para cuidar, porque acreditamos que cada avanço tecnológico deve refletir em mais qualidade de vida e em uma saúde cada vez mais acessível para todos.</p>

                    </div>

                    <div className='max-w-6/12'>
                        <img src={healthInovation} alt="" className='border-4 rounded-md border-red-700'/>
                    </div>

                </div>

                <div className='p-4'>
                    <a href="mailto:axcesstech.suporte@gmail.com" className='text-white bg-red-500 p-5 py-2.5 rounded-md'>Fale Conosco</a>
                </div>
                

            </div>
            
        </main>
    )
}