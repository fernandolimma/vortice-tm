/* import { PlusCircle, Search } from "lucide-react";
import { ButtonsControls } from "../components/buttons-controls";
import { FormEvent, useEffect, useState } from "react";
import { CustomError, FilmsProps } from "../types/interface";
import { api } from "../lib/axios";
import { toast } from "sonner";
import { useAuth } from "../hooks/auth";
import { Table } from "../components/table";
import { CreateNewModel } from "../components/create-new-model";
import { useNavigate } from "react-router-dom";
import { LoadingTable } from "../components/loading-table"; */

export function Home() {
  /* const [films, setFilms] = useState<FilmsProps[]>([]);
  const [modalCreateFilm, setModalCreateFilm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? "";
    }

    return "";
  });

  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("page")) {
      return Number(url.searchParams.get("page"));
    }

    return 1;
  });

  const [totalPages, setTotalPags] = useState(0);

  function handleModalCreateFilm() {
    setModalCreateFilm(!modalCreateFilm);
  }

  async function createFilm(event: FormEvent) {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const model = formData.get("model") as string;
    const mark = formData.get("mark") as string;

    if (!model || !mark) {
      toast.error("Preencha todos os campos");
      setIsLoading(false);
      return;
    }

    await api
      .post("/films", { model, mark })
      .then(() => {
        fetchFilms();
        setIsLoading(false);
        setModalCreateFilm(false);
      })
      .catch((error) => {
        if (error) {
          const err = error as CustomError;
          if (err.response) {
            console.log(JSON.stringify(err.response.data));
          } else {
            toast.error("Erro inesperado. Tente novamente mais tarde!");
          }
        } else {
          toast.error("Erro inesperado. Tente novamente mais tarde!");
        }
      });
  }

  async function fetchFilms() {
    const url = new URL(
      "https://api-vortice-tell-me-the-model-508231204334.us-west1.run.app/films/search"
    );
    url.searchParams.set("pageIndex", String(page - 1));

    if (search) {
      url.searchParams.set("query", search.toLocaleUpperCase());
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.result);
        setTotalPags(data.totalPages);
      });
  }

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString());
    url.searchParams.set("search", search);

    window.history.pushState({}, "", url);
    setSearch(search);
  }

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString());
    url.searchParams.set("page", String(page));

    window.history.pushState({}, "", url);
    setPage(page);
  }

  function onSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentSearch(event.target.value);
    setPage(page);
  }

  function handleFirstPage() {
    setCurrentPage(1);
  }

  function handleNextPage() {
    setCurrentPage(page + 1);
  }

  function handlePreviousPage() {
    setCurrentPage(page - 1);
  }

  function handleLastPage() {
    setCurrentPage(totalPages);
  }

  useEffect(() => {
    fetchFilms();
  }, [page, search]);

  function handleCreateCompatibleModel(id: string) {
    navigate(`/compatible-models/${id}`);
  }

  function handleGetAllCompatibleModel(id: string) {
    navigate(`/list-compatible-models/${id}`);
  }

  function handleDeleteFilm(id: string) {
    api.delete(`/films/${id}`).then(() => {
      fetchFilms();
      toast.success("Modelo deletado com sucesso!");
    });
  } */

  return (
    <div className="grid place-items-center h-screen px-4">
      <h1 className="text-3xl text-center">Estamos em manutenção, voltaremos em breve!</h1>
    </div>
  )
    {/* <div className="py-10">
      <h1 className="md:text-4xl text-lg text-zinc-100 font-bold">
        Bem-vindo ao Tell Me The Model!📱
      </h1>

      <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-4 md:space-x-3 space-x-0  mt-10">
        <div className="flex items-center space-x-2 flex-1 bg-zinc-900 px-4 py-4 rounded-md">
          <input
            className="bg-zinc-900 text-zinc-100 outline-none flex-1"
            type="text"
            placeholder="Qual modelo deseja pesquisar?"
            onChange={onSearchInputChange}
            value={search}
          />
          <Search className="size-5" />
        </div>

        {user && (
          <button
            onClick={handleModalCreateFilm}
            className="bg-lime-400 hover:bg-lime-500 transition-colors text-zinc-950 font-bold px-4 py-4 rounded-md flex items-center gap-3"
          >
            <PlusCircle className="size-5" />
            Adicionar novo modelo
          </button>
        )}
      </div>

      {films.length === 0 ? (
        <LoadingTable />
      ) : (
        <>
          <Table
            data={films}
            user={user}
            onCreateCompatibleModel={handleCreateCompatibleModel}
            onGetAllCompatibleModel={handleGetAllCompatibleModel}
            onDeleteFilm={handleDeleteFilm}
          />

          <div className="flex items-center md:justify-start justify-between gap-3 mt-3">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm">
                Página {page} de {totalPages}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <ButtonsControls
                page={page}
                totalPages={totalPages}
                handleFirstPage={handleFirstPage}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handleLastPage={handleLastPage}
              />
            </div>
          </div>
        </>
      )}

      {modalCreateFilm && (
        <CreateNewModel
          isLoading={isLoading}
          handleModalCreateFilm={handleModalCreateFilm}
          createFilm={createFilm}
        />
      )}
    </div> */}
}
