export default function CampoDeLogin(){


    return (
        <form action="" className="flex flex-col gap-5 items-center">
                
                    <input className="outline-2 rounded-md w-full px-2.5 py-3 text-2xl " type="text" placeholder="login" />

                    <input className="outline-2 rounded-md w-full px-2.5 py-3 text-2xl" type="text" placeholder="senha" />

                    <button className="bg-red-800 text-white w-6/12 text-2xl py-2 rounded-full my-5" >Entrar</button>
                </form>
    )
}