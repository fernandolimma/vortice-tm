import { PlusCircleIcon, SquareArrowOutUpRight, Trash2 } from "lucide-react";
import { FilmsProps, UserProps } from "../types/interface";
import { useAuth } from "../hooks/auth";

interface TableProps {
  data: FilmsProps[];
  user?: UserProps;
  onCreateCompatibleModel: (id: string) => void;
  onGetAllCompatibleModel: (id: string) => void;
  onDeleteFilm: (id: string) => void;
}

export function Table({
  data,
  onCreateCompatibleModel,
  onGetAllCompatibleModel,
  onDeleteFilm
}: TableProps) {
  const { user } = useAuth();

  return (
    <div className="mt-10 border border-zinc-700/30 overflow-x-auto">
      <table className="w-full min-w-[40rem]">
        <thead>
          <tr className="text-left border-b border-zinc-700/30">
            <th className="p-4">Modelo</th>

            <th className="p-4">
              Compativeis
            </th>
            <th style={{ width: 200 }} className="p-4">Marca</th>
            {user && (
              <th style={{ width: 200 }} className="p-4">
                Criação compativeis
              </th>
            )}

            {user && (
              <th style={{ width: 100 }} className="p-4">
                Deletar
              </th> 
            )}
          </tr>
        </thead>

        <tbody>
          {data?.map((film) => (
            <tr
              key={film.id}
              className="border-b border-zinc-700/30 hover:bg-zinc-800/50 transition-colors"
            >
              <td className="p-4 font-bold uppercase">{film.model}</td>
              <td className="p-4 text-left">
                <button onClick={() => onGetAllCompatibleModel(film.id)}>
                  <SquareArrowOutUpRight className="size-5" />
                </button>
              </td>
              <td className="p-4 uppercase">{film.mark}</td>
        
              {user && (
                <td className="p-4 text-center">
                  <button onClick={() => onCreateCompatibleModel(film.id)}>
                    <PlusCircleIcon className="size-5" />
                  </button>
                </td>
              )}

              {user && (
                <td className="p-4 text-center">
                  <button className="hover:text-red-500 transition-colors" onClick={() => onDeleteFilm(film.id)}>
                    <Trash2 className="size-5" />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
