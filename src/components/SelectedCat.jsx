function SelectedCat({ cats = [] }) {
  return (
    <div className="selected-cats-container">
      <h2>Gatos curtidos ({cats.length}):</h2>

      <section className="gallery">
        {cats.length === 0 ? (
          <p style={{ 
    gridColumn: '1 / -1',       // Faz o texto ocupar todas as 4 colunas do grid
    textAlign: 'center',        // Centraliza o texto
    color: '#888',
    fontSize: '0.9rem',
    padding: '1rem 0'
  }}> Nenhum gato selecionado ainda</p>
        ) : (
          cats.map((catUrl, index) => (
            <img 
              key={index} 
              src={catUrl} 
              alt={`Gato curtido ${index + 1}`} 
            />
          ))
        )}
      </section>
    </div>
  );
}

export default SelectedCat;