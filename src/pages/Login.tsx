import CampoDeLogin from "../components/CampoDeLogin";

export default function Login(){
    // Oq falta? - Analisar se o paciente exise na banco de dados
        // -se nao : colocar um alert() dizendo "USuario não encontrado"
        // -se sim : entrar na aplicacao real"

    return(
        <div className="bg-red-800 min-h-screen  flex ">
            
            {/* Retangulo Branco */}
            <div className="bg-white w-3/12 m-auto rounded-md p-10 flex flex-col items-center">
                <h1 className="text-4xl font-sans text-center mb-10">Faça o seu Login</h1>
                
                <CampoDeLogin/>
                
                <button className="text-red-800 bg-gray-200 w-6/12 text-2xl py-2 rounded-full my-5 border-2 border-red-800" >Cadastrar</button>
            </div>
            
            
        </div>
    )
}