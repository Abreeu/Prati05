import { useState } from "react";
import { FaStar, FaHeart, FaExclamationCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

function FilmeCard({ filme }) {
  const [mensagemFavorito, setMensagemFavorito] = useState("");
  const [iconeMensagem, setIconeMensagem] = useState(null);

  if (!filme) return null;

  function salvarFavorito(filme) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const existe = favoritos.some((f) => f.id === filme.id);

    if (!existe) {
      favoritos.push(filme);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      mostrarMensagem(
        "Filme adicionado aos favoritos!",
        <FaHeart className="inline mr-2 text-5xl text-red-500" />
      );
    } else {
      mostrarMensagem(
        "Esse filme já está nos favoritos!",
        <FaExclamationCircle className="inline text-yellow-300 mr-2 text-5xl" />
      );
    }
  }

  function mostrarMensagem(msg, icone) {
    setMensagemFavorito(msg);
    setIconeMensagem(icone);
    setTimeout(() => setMensagemFavorito(""), 3000);
  }

  return (
    <>
    
    
    <li
      className="bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-700/30 
                 hover:border-red-500/50 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 
                 transform hover:scale-105 transition-all duration-500 cursor-pointer group relative"
    >
      {mensagemFavorito && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 flex items-center gap-2">
          {iconeMensagem} {mensagemFavorito}
        </div>
      )}

      <div className="relative w-full">
        <h2
          className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 text-white font-bold text-sm sm:text-lg 
                       bg-black/70 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-xl
                       border border-red-500/30 group-hover:border-red-400 transition-all duration-300"
        >
          {filme.title}
        </h2>

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
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-white transition-colors duration-300">
          {filme.overview}
        </p>

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
              Popularidade: {""} 
              {filme.popularity
                ? Math.round(filme.popularity)
                : "Popularidade não encontrada"}
            </span>
          </p>
        </div>

        <button
          onClick={() => {
            salvarFavorito(filme), atualizarContador();
          }}
          className="mt-2 bg-green-600 font-semibold px-3 py-1 rounded hover:bg-green-500 text-white hover:text-red-500 flex justify-center items-center gap-2 w-full cursor-pointer"
        >
          <FaHeart /> Favoritar
        </button>
      </div>
      
    </li>
    </>
  );
}

export default FilmeCard;
