import { useState } from "react"

type Login = {
  nm_usuario: string
  senha: string
}

export default function FormCadastroLogin({ onChange }: { onChange: (data: Login) => void }) {
  const [login, setLogin] = useState<Login>({ nm_usuario: "", senha: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const updated = { ...login, [name]: value }
    setLogin(updated)
    onChange(updated)
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-md mx-auto px-2 sm:px-0">
      <input
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="nm_usuario"
        placeholder="Usuário"
        onChange={handleChange}
        required
      />
      <input
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
        name="senha"
        placeholder="Senha"
        onChange={handleChange}
        required
      />
    </div>
  )
}
