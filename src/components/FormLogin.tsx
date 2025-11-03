import { useState } from "react"

type Login = {
  usuario: string,
  senha: string
}

export default function FormLogin() {

  const [login, setLogin] = useState<Login>({ usuario: "", senha: "" })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Envio para o backend:", login.usuario, "e", login.senha) /*AQUI acho que vai o fetch depois com a API*/

    
  }

  // Codigo gerado
  /* 
  const API_URL = "SUA_URL_DO_BACKEND/auth/login"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Limpa erros anteriores

    try {
      // 1. Configuração da requisição fetch
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Corpo da requisição
          username: login.usuario, 
          password: login.senha,
        }),
      });

      // 2. VERIFICAÇÃO EXPLÍCITA DO STATUS HTTP
      if (!response.ok) {
        // Se o status for 4xx ou 5xx, trata o erro
        const errorData = await response.json(); 
        
        // Lança um erro com a mensagem do back-end ou uma genérica
        throw new Error(errorData.message || 'Credenciais inválidas.');
      }

      // 3. Sucesso: Converter o corpo da resposta para JSON e tipar
      const data: AuthResponse = await response.json();
      const { token } = data;

      // Ação crucial: Armazenar o token
      localStorage.setItem("authToken", token); 

      console.log("Login com sucesso usando fetch. Token armazenado.");
      // *** AQUI ENTRARIA O REDIRECIONAMENTO ***

    } catch (err) {
      // Captura o erro (de rede ou o erro que foi lançado em 'response.ok')
      console.error("Erro no Login com fetch:", err);
      // Define a mensagem de erro para o estado
      setError((err as Error).message || "Erro desconhecido ao tentar logar.");
    }
    // O bloco 'finally' foi removido junto com o setLoading(false)
  };*/

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center w-full max-w-[280px]"
    >
      <input className="bg-neutral-800 text-white placeholder-gray-400 border border-gray-600 rounded-md w-full px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
        type="text"
        placeholder="Usuário"
        onChange={handleChange}
        value={login.usuario}
        name="usuario"
      />

      <input
        className="bg-neutral-800 text-white placeholder-gray-400 border border-gray-600 rounded-md w-full px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
        type="password"
        placeholder="Senha"
        onChange={handleChange}
        value={login.senha}
        name="senha"
      />

      <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-semibold w-40 text-base py-2 rounded-md mt-2 transition">Entrar</button>
    </form>
  )
}
