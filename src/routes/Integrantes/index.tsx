import dudu from '../../assets/desenvolvedor_eduardo.jpg'
import natan from '../../assets/natan.jpg'
import victor from '../../assets/victor.png'

export default function Integrantes(){

    return(
        <div>
             <main className="py-6 px-12">
      <h1 className="text-5xl text-center p-10 underline ">Desenvolvedores</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Eduardo */}
        <section className="bg-gray-100 text-gray-900 text-center rounded-md flex flex-col items-center border border-white">
          <div className="p-4">

            <hgroup className=' p-4'>
              <h2 className="text-3xl">Eduardo Locaspi</h2>
              <h3 className='text-gray-600'>RM561713</h3>
              <h3 className='text-gray-600'>1TDSPI</h3>
            </hgroup>

            <div className='flex justify-center'>
              <img src={dudu} alt="Foto do desenvolvedor Eduardo Locaspi" className="w-40 h-40 object-cover rounded-md"/>
            </div>
            <div className="p-5 flex flex-row justify-center gap-5">

              <a href="https://www.linkedin.com/in/eduardo-locaspi-14119934b/" target="_blank">
                <img src="public\linkedin.png" alt="LinkedIn" className="w-10" />
              </a>
              <a href="https://github.com/Eduardo-Locaspi" target="_blank">
                <img src="public\github.png" alt="GitHub" className="w-10" />
              </a>

            </div>
          </div>
        </section>

        {/* Natan */}
        <section className="bg-gray-100 text-gray-900 text-center rounded-md flex flex-col items-center border border-white">
          <div className="p-4 ">
            <hgroup className=' p-4'>
              <h2 className="text-3xl">Natan Moraes</h2>
              <h3 className='text-gray-600'>RM564992</h3>
              <h3 className='text-gray-600'>1TDSPI</h3>

            </hgroup>
            
            <div className='flex justify-center'> 
              <img
              src={natan}
              alt="Foto do desenvolvedor Natan Moraes"
              className="w-40 h-40 object-cover rounded-md "
              />
            </div>
            

            <div className="p-5 flex flex-row justify-center gap-5">
              <a
                href="https://www.linkedin.com/in/natanfreitasdemoraes/"
                target="_blank">
                <img src="public\linkedin.png" alt="LinkedIn" className="w-10" />
              </a>
              <a href="https://github.com/nfreitas2000" target="_blank">
                <img src="public\github.png" alt="GitHub" className="w-10" />
              </a>
            </div>
          </div>
        </section>

        {/* Victor */}
        <section className="bg-gray-100 text-gray-900 text-center rounded-md flex flex-col items-center">
          <div className="p-4">
            <hgroup className=' p-4'>
              <h2 className="text-3xl">Victor Alves</h2>
              <h3 className='text-gray-600'>RM561833</h3>
              <h3 className='text-gray-600'>1TDSPI</h3>

            </hgroup>

            <div className='flex justify-center'>
              <img
                src={victor}
                alt="Foto do desenvolvedor Victor Alves"
                className="w-40 h-40 object-cover rounded-md"
              />
            </div>

            <div className="p-5 flex flex-row justify-center gap-5">
              <a href="https://www.linkedin.com/in/victor-alves-10587b2b6/" target="_blank">
                <img src="public\linkedin.png" alt="LinkedIn" className="w-10" />
              </a>
              <a href="https://github.com/victoralves10" target="_blank">
                <img src="public\github.png" alt="GitHub" className="w-10" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
        </div>
    )
}