import { useState } from "react"
import type { LoginType } from "../types/LoginType"

export default function FormLogin(){


    const [login,setLogin] = useState<LoginType>({nome:'',senha:''})
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        console.log("envio para o backend")
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setLogin({...login,[e.target.name]:e.target.value})
        //[e.target.name]: Cada input tem um atributo NAME,
        //      então como temos dois inputs, temos que usar uma formula/funcao geral
        //porque esta entre colchetes? -> Por que é uma propriedade dinamica

        //oq é ...login? é uma copia gerada

        //e.target.value : Cada input tem um atributo VALUE

        //OBJETIVO: Atribuir cada VALUE em seu respectivo NAME
    }


    return (
        <form action="" className="flex flex-col gap-5 items-center" onSubmit={handleSubmit}> 
            <input className="outline-2 rounded-md w-full px-2.5 py-3 text-2xl " type="text" placeholder="nome" onChange={handleChange} value={login.nome} name="nome"/>

            <input className="outline-2 rounded-md w-full px-2.5 py-3 text-2xl" type="text" placeholder="senha" onChange={handleChange} value={login.senha} name="nome"/>

            <button type ="submit" className="bg-red-800 text-white w-6/12 text-2xl py-2 rounded-full my-5" >Entrar</button>
        </form>
    )
}