import { useState, useEffect } from 'react'

function CatCard() {
  const [catUrl, setCatUrl] = useState('')
  const [loading, setLoading] = useState(true)

  async function mostrarGato() {
    try {
      setLoading(true)
      const res = await fetch('https://api.thecatapi.com/v1/images/search')
      const data = await res.json()
      setCatUrl(data[0].url)
    } catch (error) {
      console.error('Erro ao buscar imagem:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    mostrarGato()
  }, [])

  return (
    <div className="catCard">
      {loading ? (
        <p>Carregando gatinho...</p>
      ) : (
        <img src={catUrl} alt="Gato aleatório" />
      )}
      <br />
      <button onClick={mostrarGato}>Buscar outro gato</button>
    </div>
  )
}

export default CatCard