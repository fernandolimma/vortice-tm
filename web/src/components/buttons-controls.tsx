import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface ButtonsControlsProps {
  page: number;
  totalPages: number;
  handleFirstPage: () => void;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handleLastPage: () => void;
}

export function ButtonsControls({
  page,
  totalPages,
  handleFirstPage,
  handlePreviousPage,
  handleNextPage,
  handleLastPage,
}: ButtonsControlsProps) {
  return (
    <>
      <button
        disabled={page === 1}
        onClick={handleFirstPage}
        className="bg-zinc-800 p-2 rounded text-sm disabled:opacity-50"
      >
        <ChevronsLeft />
      </button>
      <button
        disabled={page === 1}
        onClick={handlePreviousPage}
        className="bg-zinc-800 p-2 rounded text-sm disabled:opacity-50"
      >
        <ChevronLeft />
      </button>
      <button
        disabled={page === totalPages}
        onClick={handleNextPage}
        className="bg-zinc-800 p-2 rounded text-sm disabled:opacity-50"
      >
        <ChevronRight />
      </button>

      <button
        disabled={page === totalPages}
        onClick={handleLastPage} 
        className="bg-zinc-800 p-2 rounded text-sm disabled:opacity-50"
      >
        <ChevronsRight />
      </button>
    </>
  );
}
