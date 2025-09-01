const API_KEY = import.meta.env.VITE_API_KEY
const URL = "https://api.themoviedb.org/3"

export async function buscarFilmesPopulares() {
  const resp = await fetch(`${URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)

  if (!resp.ok) throw new Error("Erro ao buscar filmes populares")
  return resp.json()
}

export async function buscarFilmesPorNome(query) {
  const resp = await fetch(`${URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`)
  if (!resp.ok) throw new Error("Erro ao buscar filmes")
  return resp.json()
}