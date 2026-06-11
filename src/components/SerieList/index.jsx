import React, { useState } from 'react';

function SerieList({ series, deletarSerie, setEditingSerie }) {
  const [filterText, setFilterText] = useState('');

  const filteredSeries = series.filter(serie => {
    const term = filterText.toLowerCase();
    return (
      (serie.titulo && serie.titulo.toLowerCase().includes(term)) ||
      (serie.categoria && serie.categoria.toLowerCase().includes(term))
    );
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista de Séries</h2>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Filtrar por Título ou Categoria:</label>
        <input
          type="text"
          placeholder="Buscar..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          style={{ padding: '5px', width: '300px' }}
        />
      </div>

      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Título</th>
            <th>Temporadas</th>
            <th>Lançamento</th>
            <th>Diretor</th>
            <th>Produtora</th>
            <th>Categoria</th>
            <th>Data Assistido</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredSeries.length > 0 ? (
            filteredSeries.map((serie) => (
              <tr key={serie.id}>
                <td>{serie.titulo}</td>
                <td>{serie.temporadas}</td>
                <td>{serie.lancamento}</td>
                <td>{serie.diretor}</td>
                <td>{serie.produtora}</td>
                <td>{serie.categoria}</td>
                <td>{serie.dataAssistido}</td>
                <td>
                  <button 
                    onClick={() => setEditingSerie(serie)}
                    style={{ marginRight: '5px', padding: '5px 10px', cursor: 'pointer', background: '#008CBA', color: 'white', border: 'none' }}
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => deletarSerie(serie.id)}
                    style={{ padding: '5px 10px', cursor: 'pointer', background: '#f44336', color: 'white', border: 'none' }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>Nenhuma série encontrada.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SerieList;
