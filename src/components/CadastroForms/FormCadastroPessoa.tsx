import { useState } from "react"

type Pessoa = {
  nm_pessoa: string
  cpf: string
  rg: string
  dt_nascimento: string
  sx_pessoa: string
  estado_civil: string
  escolaridade: string
}

export default function FormCadastroPessoa({ onChange }: { onChange: (data: Pessoa) => void }) {
  const [pessoa, setPessoa] = useState<Pessoa>({
    nm_pessoa: "",
    cpf: "",
    rg: "",
    dt_nascimento: "",
    sx_pessoa: "",
    estado_civil: "",
    escolaridade: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const updated = { ...pessoa, [name]: value }
    setPessoa(updated)
    onChange(updated)
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <input className="rounded-md border px-3 py-2" type="text" name="nm_pessoa" placeholder="Nome completo" onChange={handleChange} />
      <input className="rounded-md border px-3 py-2" type="text" name="cpf" placeholder="CPF" onChange={handleChange} />
      <input className="rounded-md border px-3 py-2" type="text" name="rg" placeholder="RG" onChange={handleChange} />
      <input className="rounded-md border px-3 py-2" type="date" name="dt_nascimento" onChange={handleChange} />
      <select className="rounded-md border px-3 py-2" name="sx_pessoa" onChange={handleChange}>
        <option value="">Sexo</option>
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
        <option value="I">Intersexo</option>
      </select>
      <select className="rounded-md border px-3 py-2" name="estado_civil" onChange={handleChange}>
        <option value="">Estado civil</option>
        <option value="solteiro">Solteiro(a)</option>
        <option value="casado">Casado(a)</option>
        <option value="divorciado">Divorciado(a)</option>
        <option value="viúvo">Viúvo(a)</option>
      </select>
      <input className="rounded-md border px-3 py-2" type="text" name="escolaridade" placeholder="Escolaridade" onChange={handleChange} />
    </div>
  )
}
