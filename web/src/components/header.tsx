import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";

interface HeaderProps {
  signOut: () => void;
}

export function Header({ signOut }: HeaderProps) {
  const { user } = useAuth();
  return (
    <header className="flex items-center justify-between border-b border-zinc-700/30 py-10">
      <Link to="/">
        <img
          className="size-10"
          src="/logo.svg"
          alt="Logo da aplicação Tell Me The Model"
        />
      </Link>

      <div className="flex flex-col items-end">
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            <li>
              <Link className="text-zin-100 hover:text-zinc-400" to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link className="text-zin-100 hover:text-zinc-400" to="/contato">Contato</Link>
            </li>
          </ul>
          {user ? (
            <button
              onClick={() => signOut()}
              className="text-zinc-100 text-lg font-bold flex items-center gap-2"
            >
              sair
              <LogOut className="size-4" />
            </button>
          ) : (
            <Link to="/sign-in" className="text-zinc-100 text-lg font-bold border px-3 py-1 rounded hover:bg-lime-400 hover:text-black">
              Entrar
            </Link>
          )}
        </div>
        {user && (
          <strong className="text-zinc-500 text-sm font-light">
            Bem Vindo {user.name}!
          </strong>
        )}
      </div>
    </header>
  );
}
