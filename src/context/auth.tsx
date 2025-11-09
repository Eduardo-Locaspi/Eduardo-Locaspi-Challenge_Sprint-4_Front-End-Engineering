import { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: string | null;
  role: "Paciente" | "Funcionario" | null;
  signed: boolean;
  signin: (usuario: string, senha: string, tipo: "Paciente" | "Funcionario") => Promise<string | null>;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));
  const [role, setRole] = useState<"Paciente" | "Funcionario" | null>(
    (localStorage.getItem("role") as "Paciente" | "Funcionario") || null
  );

  const signed = !!user;

  const signin = async (usuario: string, senha: string, tipo: "Paciente" | "Funcionario") => {
    const endpoint =
      tipo === "Paciente"
        ? "http://localhost:8080/login/paciente"
        : "http://localhost:8080/login/funcionario";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha }),
      });

      if (res.ok) {
        const token = btoa(`${usuario}:${senha}`);
        localStorage.setItem("token", token);
        localStorage.setItem("user", usuario);
        localStorage.setItem("role", tipo);
        setUser(usuario);
        setRole(tipo);
        return null;
      } else {
        return "Usuário ou senha inválidos";
      }
    } catch (err) {
      console.error("Erro ao logar:", err);
      return "Erro de conexão com o servidor";
    }
  };

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, signed, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
