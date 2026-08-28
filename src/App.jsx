import { useState, useEffect } from 'react'
import './App.css'
import CatCard from './components/CatCard'
import SelectedCat from './components/SelectedCat'
import Header from './components/Header'

export function App() {
  const [gatosCurtidos, setGatosCurtidos] = useState(() => {
    const salvos = localStorage.getItem('catmatch_likes')
    return salvos ? JSON.parse(salvos) : []
  })

  useEffect(() => {
    localStorage.setItem('catmatch_likes', JSON.stringify(gatosCurtidos))
  }, [gatosCurtidos])

  function adicionarAosCurtidos(novaUrl) {
    setGatosCurtidos(prev => [novaUrl, ...prev])
  }

  function limparMatches() {
    setGatosCurtidos([])
    localStorage.removeItem('catmatch_likes')
  }

  return (
    <main className="container">
      <Header></Header>
      
      <CatCard onLike={adicionarAosCurtidos} />
      
      <SelectedCat cats={gatosCurtidos} />

      {gatosCurtidos.length > 0 && (
        <button 
          onClick={limparMatches}
          style={{
            marginTop: '1rem',
            background: 'none',
            border: 'none',
            color: '#888',
            cursor: 'pointer',
            fontSize: '0.85rem',
            textDecoration: 'underline'
          }}
        >
          Limpar histórico
        </button>
      )}
    </main>
  )
}

export default App