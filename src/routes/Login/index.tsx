import FormLogin from "../../components/FormLogin";
import { Link } from "react-router-dom";
import logo from "../../assets/axcessTech_Logo-removebg-preview.png";

export default function Login() {
  return (
    <div className="bg-red-600 min-h-screen flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl h-auto md:h-[450px] rounded-md overflow-hidden shadow-lg">

        <div className="bg-gray-100 flex items-center justify-center p-6">
          <img
            src={logo}
            alt="AxcessTech Logo"
            className="w-48 md:w-64"
          />
        </div>

        <div className="bg-neutral-800 flex flex-col justify-center items-center text-center px-6 py-8 md:px-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Faça seu <span className="text-red-400">LOGIN!</span>
          </h1>

          <FormLogin />

          <p className="text-white text-sm md:text-base mt-6">
            Não possui login?
          </p>

          <Link
            to="/cadastro"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-44 md:w-48 py-2 rounded-md mt-2 transition"
          >
            Realizar cadastro!
          </Link>
        </div>
      </div>
    </div>
  );
}
