import { useState, useEffect } from "react"
import { buscarFilmesPopulares, buscarFilmesPorNome } from "../services/api"
import FilmeCard from "../components/FilmeCard"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"


function Filmes() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    carregarPopulares()
  }, [])

  async function carregarPopulares() {
    try {
      setLoading(true)
      const data = await buscarFilmesPopulares()
      setFilmes(data.results)
      console.log(data.results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function buscarFilmes(query) {
    try {
      setLoading(true)
      const data = await buscarFilmesPorNome(query)
      setFilmes(data.results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error}</p>

  return (
    <div className="bg-gray-800">
      <Navbar onSearch={buscarFilmes} />
      <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 bg-gray-800 py-20 pt-50 sm:pt-20">
  {filmes.slice(0, 15).map((filme) => (
    <FilmeCard key={filme.id} filme={filme} />
  ))}
</ul>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Filmes
