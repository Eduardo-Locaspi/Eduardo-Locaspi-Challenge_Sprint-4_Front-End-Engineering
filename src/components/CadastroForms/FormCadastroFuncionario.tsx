import { useState } from "react"

type Funcionario = {
  setor: string
  cargo: string
  st_credencial: string
}

export default function FormCadastroFuncionario({ onChange }: { onChange: (data: Funcionario) => void }) {
  const [funcionario, setFuncionario] = useState<Funcionario>({
    setor: "",
    cargo: "",
    st_credencial: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const updated = { ...funcionario, [name]: value }
    setFuncionario(updated)
    onChange(updated)
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-md mx-auto px-2 sm:px-0">
      <input
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="setor"
        placeholder="Setor"
        value={funcionario.setor}
        onChange={handleChange}
        required
      />
      <input
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="cargo"
        placeholder="Cargo"
        value={funcionario.cargo}
        onChange={handleChange}
        required
      />
      <select
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="st_credencial"
        value={funcionario.st_credencial}
        onChange={handleChange}
        required
      >
        <option value="">Status da credencial</option>
        <option value="A">Ativa</option>
        <option value="I">Inativa</option>
      </select>
    </div>
  )
}
