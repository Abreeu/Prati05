import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BiMovie } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RiEmotionSadLine } from "react-icons/ri";


function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  function removerFavoritos(id) {
    const novosFavoritos = favoritos.filter((f) => f.id !== id);
    setFavoritos(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  }

  if (favoritos.length === 0) {
  return (
   <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
    <p className="text-white text-9xl"><RiEmotionSadLine />
</p>
  <p className="text-white text-lg mb-4 font-bold">Nenhum filme foi adicionado</p>
  <button
    onClick={() => navigate("/")}
    className="bg-red-600 font-semibold px-4 py-2 rounded hover:bg-red-500 text-white cursor-pointer flex gap-1 items-center"
  >
    <IoMdArrowRoundBack />
    Voltar
  </button>
</div>
  );
}

  return (
    <div className="bg-gray-900 min-h-screen pt-24 sm:pt-28">
  <div className="max-w-6xl mx-auto px-4 py-6">
    <h1 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-4 flex flex-col sm:flex-row text-center sm:text-left items-center gap-4">
      <BiMovie />
      Meus <strong>Favoritos</strong>
    </h1>

    <button
      onClick={() => navigate("/")}
      className="mt-2 bg-red-600 font-semibold px-2 py-1 rounded hover:bg-red-500 text-white cursor-pointer flex gap-1 items-center mb-6"
    >
      <IoMdArrowRoundBack />
      Voltar
    </button>

    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {favoritos.map((filme) => (
        <li
          key={filme.id}
          className="bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-700/30 
                     hover:border-red-500/50 shadow-md hover:shadow-lg hover:shadow-red-500/20 
                     transform hover:scale-105 transition-all duration-500 cursor-pointer group relative"
        >
          <div className="relative w-full">
            {filme.poster_path && (
              <div className="relative overflow-hidden w-full">
                <img
                  src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                  alt={filme.title}
                  className="w-full h-48 sm:h-60 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-purple-600/20
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
              </div>
            )}
          </div>

          <div className="p-4 space-y-3">
            <h2
              className=" text-white font-bold text-sm sm:text-md 
                           bg-black/50 px-2 sm:px-3 py-1 rounded
                           border-b border-red-500/30 group-hover:border-red-400 transition-all duration-300"
            >
              {filme.title}
            </h2>

            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-white font-semibold">
                <span className="text-lg">
                  <MdDateRange />
                </span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">
                  Ano:{" "}
                  {filme.release_date
                    ? new Date(filme.release_date).getFullYear()
                    : "Desconhecido"}
                </span>
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-yellow-400 font-semibold">
                <span className="text-lg">
                  <FaStar />
                </span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">
                  Popularidade:{" "}
                  {filme.popularity
                    ? Math.round(filme.popularity)
                    : "Não disponível"}
                </span>
              </p>
            </div>

            <button
              onClick={() => removerFavoritos(filme.id)}
              className="mt-2 bg-red-600 font-semibold px-3 py-1 rounded hover:bg-red-500 text-white cursor-pointer w-full"
            >
              Remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>
  );
}

export default Favoritos;
