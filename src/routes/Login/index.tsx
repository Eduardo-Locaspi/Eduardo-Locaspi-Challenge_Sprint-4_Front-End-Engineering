import FormLogin from "../../components/FormLogin";
import { Link } from "react-router-dom";
import logo from "../../../public/axcessTech_Logo-removebg-preview.png";

export default function Login() {
  return (
    <div className="bg-red-600 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 w-[800px] h-[450px] rounded-md overflow-hidden shadow-lg">

        <div className="bg-gray-100 flex items-center justify-center">
          <img src={logo} alt="AxcessTech Logo" className="w-64" />
        </div>

        <div className="bg-neutral-800 flex flex-col justify-center items-center text-center px-10 p-4">
          <h1 className="text-2xl font-bold text-white mb-8">
            Faça seu <span className="text-red-400">LOGIN!</span>
          </h1>

          <FormLogin/>

          <p className="text-white text-sm mt-6">Não possui login?</p>

          <Link
            to="/cadastro"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-48 py-2 rounded-md mt-2 transition"
          >
            Realizar cadastro!
          </Link>
        </div>
      </div>
    </div>
  );
}
