export default function Login(){

    return(
        <div className="bg-red-800 min-h-screen  flex ">
            
            <div className="bg-white w-3/12 m-auto rounded-md p-10 flex flex-col items-center">
                <h1 className="text-4xl font-sans text-center mb-10">Faça o seu Login</h1>
                
                <form action="" className="flex flex-col gap-5 items-center">
                
                    <input className="outline-2 rounded-md w-full px-2.5 py-3 text-2xl " type="text" placeholder="login" />

                    <input className="outline-2 rounded-md w-full px-2.5 py-3 text-2xl" type="text" placeholder="senha" />

                    <button className="bg-red-800 text-white w-6/12 text-2xl py-2 rounded-full my-5" >Entrar</button>
                </form>

                
                
                <button className="text-red-800 bg-gray-200 w-6/12 text-2xl py-2 rounded-full my-5 border-2 border-red-800" >Cadastrar</button>
            </div>
            
            
        </div>
    )
}