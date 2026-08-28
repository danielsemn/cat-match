import { useState, useEffect } from 'react'

function CatCard({ onLike }) {
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

  function handleCurtir() {
    if (catUrl && onLike) {
      onLike(catUrl)
      mostrarGato()       
    }
  }

  return (
    <div className="catCard">
      {loading ? (
        <p>Carregando gatinho...</p>
      ) : (
        <img src={catUrl} alt="Gato aleatório" />
      )}
      
      <div className="botoes-acao">
        <button onClick={mostrarGato}>Passar ❌</button>
        <button onClick={handleCurtir} disabled={loading}>Curtir ❤️</button>
      </div>
    </div>
  )
}

export default CatCard