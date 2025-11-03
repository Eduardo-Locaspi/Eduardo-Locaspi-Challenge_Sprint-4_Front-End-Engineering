import { useState } from "react"

type Paciente = {
  historico_medico: string
  grupo_sanguineo: string
  altura: string
  peso: string
}

export default function FormCadastroPaciente({ onChange }: { onChange: (data: Paciente) => void }) {

  const [paciente, setPaciente] = useState<Paciente>({
    historico_medico: "",
    grupo_sanguineo: "",
    altura: "",
    peso: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const dados = { ...paciente, [name]: value }
    setPaciente(dados)
    onChange(dados)
  }

  return (
    <div className="flex flex-col gap-3 w-full">

      <input className="rounded-md border px-3 py-2" name="historico_medico" placeholder="Histórico médico" onChange={handleChange}/>

      <select className="rounded-md border px-3 py-2" name="grupo_sanguineo" onChange={handleChange} required>
        <option value="">Grupo sanguíneo</option>

        {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(tipo => (
          <option key={tipo} value={tipo}>{tipo}</option>
        ))}
      </select>
      
      <input className="rounded-md border px-3 py-2" type="number" name="altura" placeholder="Altura (m)" onChange={handleChange} min={1} required/>
      <input className="rounded-md border px-3 py-2" type="number" name="peso" placeholder="Peso (kg)" onChange={handleChange} min={1} required/>
    </div>
  )
}
