export function LoadingTable() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <div className="p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center space-x-4">
          <div className="animate-spin rounded-full h-10 w-10 border-4  border-zinc-400 border-t-transparent" />
          <div className="space-y-2">
            <h2 className="text-2xl text-center md:text-left font-bold text-zinc-200">
              Um momento...
            </h2>
            <p className="text-zinc-300 text-center md:text-left">
              Carregando lista de peliculas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}