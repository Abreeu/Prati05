import { useState } from "react";
import { GiFilmProjector } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Navbar({ onSearch }) {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!busca.trim()) return;
    onSearch(busca);
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 border-b border-red-500 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
        <h2 className="text-2xl font-mono text-white flex gap-5 items-center">
          <a href="/">Busca <strong> Filmes</strong>{" "}</a>
          <GiFilmProjector className="text-red-700 animate-bounce text-4xl" />
        </h2>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={() => navigate("/favoritos")}
            className="text-white bg-green-600 px-4 py-2 rounded-xl hover:bg-green-500 transition-colors cursor-pointer flex items-center gap-2"
          >
            <p className="text-red-500">
              <FaHeart />
            </p>

            <strong>Favoritos</strong>
          </button>

          <div className="relative w-full sm:w-64">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg sm:text-xl">
              <CiSearch />
            </span>
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
              placeholder="Buscar filme..."
              className="bg-gray-800 text-white px-10 py-2 rounded-xl border border-gray-600 focus:border-red-500 focus:outline-none w-full  text-sm sm:text-base"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-red-600 font-semibold text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
