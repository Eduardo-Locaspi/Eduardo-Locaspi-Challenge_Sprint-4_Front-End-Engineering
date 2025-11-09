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

  const formatarData = (valor: string) => {
    if (!valor) return ""
    const [ano, mes, dia] = valor.split("-")
    return `${dia}/${mes}/${ano}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const novoValor = name === "dt_nascimento" ? formatarData(value) : value
    const updated = { ...pessoa, [name]: novoValor }
    setPessoa(updated)
    onChange(updated)
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-md mx-auto px-2 sm:px-0">
      <input
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="nm_pessoa"
        placeholder="Nome completo"
        onChange={handleChange}
        required
      />
      <input
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="cpf"
        placeholder="CPF"
        onChange={handleChange}
        maxLength={11}
        minLength={10}
        required
      />
      <input
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="rg"
        placeholder="RG"
        onChange={handleChange}
        maxLength={9}
        minLength={8}
        required
      />
      <input
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="date"
        name="dt_nascimento"
        onChange={handleChange}
        required
      />
      <select
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="sx_pessoa"
        onChange={handleChange}
        required
      >
        <option value="">Sexo</option>
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
        <option value="I">Intersexo</option>
      </select>
      <select
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="estado_civil"
        onChange={handleChange}
        required
      >
        <option value="">Estado civil</option>
        <option value="solteiro">Solteiro(a)</option>
        <option value="casado">Casado(a)</option>
        <option value="divorciado">Divorciado(a)</option>
        <option value="viúvo">Viúvo(a)</option>
      </select>
      <select
        className="rounded-md border px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="escolaridade"
        onChange={handleChange}
        required
      >
        <option value="">Escolaridade</option>
        <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
        <option value="Ensino Fundamental Cursando">Ensino Fundamental Cursando</option>
        <option value="Ensino Fundamental Concluído">Ensino Fundamental Concluído</option>
        <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
        <option value="Ensino Médio Cursando">Ensino Médio Cursando</option>
        <option value="Ensino Médio Concluído">Ensino Médio Concluído</option>
        <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
        <option value="Ensino Superior Cursando">Ensino Superior Cursando</option>
        <option value="Ensino Superior Concluído">Ensino Superior Concluído</option>
        <option value="Pós-Graduação Incompleto">Pós-Graduação Incompleto</option>
        <option value="Pós-Graduação Cursando">Pós-Graduação Cursando</option>
        <option value="Pós-Graduação Concluído">Pós-Graduação Concluído</option>
      </select>
    </div>
  )
}
