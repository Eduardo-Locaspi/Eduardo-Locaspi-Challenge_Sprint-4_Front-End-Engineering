import FormCadastro from "../../components/FormCadastro";


export default function Cadastro(){
    // Duvida: O que é melhor? Criar apenas um formulario com todas as informacoes necessárias OU dividir por componentes(que representam as entidades/tabelas) 

    return(
        <div className="bg-red-800 min-h-screen  flex flex-col gap-10 p-20 items-start">
                    
                <div className="bg-white w-3/12 m-auto rounded-md p-10 flex flex-col items-center">
                    <h1 className="text-4xl font-sans text-center mb-10">Dados Pessoais:</h1>
                    
                    <FormCadastro/>
                      
                </div>
                
                
                <button className="text-red-800 bg-gray-200 w-6/12 text-2xl py-2 rounded-full my-5 border-2 border-red-800" >Criar Conta</button>
        </div>
    )
}