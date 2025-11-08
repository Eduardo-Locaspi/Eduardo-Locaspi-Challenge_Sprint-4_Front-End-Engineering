import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type PrivateRouteProps = {
  Item: React.ComponentType;
  allowedRoles: ("Paciente" | "Funcionario")[];
};

export const PrivateRoute = ({ Item, allowedRoles }: PrivateRouteProps) => {
  const { user, role } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role!)) return <Navigate to="/unauthorized" />;

  return <Item />;
};
