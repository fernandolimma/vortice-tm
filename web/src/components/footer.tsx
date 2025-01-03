import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 items-center justify-center py-4 mt-10">
      <div className="text-center">
        <span className="text-zinc-300 text-sm font-light">
          Vortice Consulting & Tech -
        </span>
        <span className="text-zinc-300 text-sm font-light">
          {" "}
          CNPJ: 38.414.530/0001-59
        </span>
      </div>

      <div className="space-x-4">
        <Link className="text-sm text-zinc-300" to="/termos-e-condicoes">
          Termos e Condições
        </Link>
        <Link className="text-sm text-zinc-300" to="/politica-de-privacidade">
          Política de Privacidade
        </Link>
      </div>

      <p className="text-zinc-300 text-sm font-light">
        &copy; {new Date().getFullYear()} - Todos os Direitos Reservados
      </p>
    </footer>
  );
}
