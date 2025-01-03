import { FormEvent, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { CustomError, FilmsProps } from "../types/interface";
import { api } from "../lib/axios";
import { toast } from "sonner";

export function CreateCompatibleModel() {
  const [data, setData] = useState({} as FilmsProps);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchFilm() {
      const response = await api.get(`/films/${id}`);
      console.log(response.data)
      setData(response.data);
    }
    fetchFilm();
  }, []);

  async function createCompatibleModel(event: FormEvent) {
    event.preventDefault();

    setIsLoading(true)

    const formData = new FormData(event.target as HTMLFormElement);
    const model = formData.get("model") as string;
    const mark = formData.get("mark") as string;

    if (!model || !mark) {
      toast.error("Preencha todos os campos");
      setIsLoading(false)
      return;
    }

    const data = { model, mark, filmsId: id };

    await api
      .post("/compatible-films", data)
      .then(() => {
        toast.success("Modelo compatível criado com sucesso!");
        setIsLoading(false)
        navigate(-1)
      })
      .catch((error) => {
        if (error) {
          const err = error as CustomError;
          if (err.response) {
            console.log(JSON.stringify(err.response.data));
          }
        }
      });
  }

  function handleToBack() {
    navigate(-1)
  }

  return (
    <div className="py-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="md:text-3xl text-lg font-bold">
          Crie um modelo compatível com a{" "}
          <span className="text-lime-400">{data.model?.toLocaleUpperCase()}</span>
        </h1>

        <button onClick={handleToBack}>
          Voltar
        </button>
      </div>

      <form className="flex flex-col gap-2" onSubmit={createCompatibleModel}>
        <input
          className="bg-zinc-900 text-zinc-100 outline-none p-4 flex-1"
          type="text"
          name="model"
          placeholder="Nome do modelo"
        />
        <input
          className="bg-zinc-900 text-zinc-100 outline-none p-4 flex-1"
          type="text"
          name="mark"
          placeholder="Nome da marca"
        />

        <button
          className="bg-lime-400 hover:bg-lime-500 transition-colors text-zinc-950 font-bold p-4 rounded"
          type="submit"
        >
          {isLoading ? "Criando..." : "Criar modelo"}
        </button>
      </form>
    </div>
  );
}
