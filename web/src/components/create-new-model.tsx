import { XCircle } from "lucide-react";
import { FormEvent } from "react";

interface CreateNewModelProps {
  handleModalCreateFilm: () => void;
  createFilm: (event: FormEvent) => void;
  isLoading: boolean;
}

export function CreateNewModel({
  handleModalCreateFilm,
  createFilm,
  isLoading,
}: CreateNewModelProps) {
  return (
    <div className="fixed inset-0 w-full h-full bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-950 p-8 rounded-md md:w-[30rem] w-full relative">
        <h2 className="text-zinc-100 font-bold">Crie um novo modelo</h2>

        <button
          onClick={handleModalCreateFilm}
          className="text-zinc-100 absolute top-4 right-4"
        >
          <XCircle className="size-5" />
        </button>
        <form onSubmit={createFilm} className="flex flex-col gap-4 mt-4">
          <input
            className="p-3 bg-transparent bg-zinc-900 text-zinc-100 outline-none rounded"
            type="text"
            placeholder="Nome do modelo"
            name="model"
          />
          <input
            className="p-3 bg-transparent bg-zinc-900 text-zinc-100 outline-none rounded"
            type="text"
            placeholder="Nome da marca"
            name="mark"
          />

          <button className="bg-lime-400 hover:bg-lime-500 transition-colors text-zinc-950 font-bold p-4 rounded">
            {isLoading ? "Criando..." : "Criar modelo"}
          </button>
        </form>
      </div>
    </div>
  );
}
