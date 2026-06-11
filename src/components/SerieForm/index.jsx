import React, { useState, useEffect } from 'react';

function SerieForm({ adicionarSerie, editarSerie, editingSerie, setEditingSerie, setCurrentTab }) {
  const [formData, setFormData] = useState({
    titulo: '',
    temporadas: '',
    lancamento: '',
    diretor: '',
    produtora: '',
    categoria: '',
    dataAssistido: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingSerie) {
      setFormData(editingSerie);
    } else {
      setFormData({
        titulo: '',
        temporadas: '',
        lancamento: '',
        diretor: '',
        produtora: '',
        categoria: '',
        dataAssistido: ''
      });
    }
  }, [editingSerie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.titulo || 
      !formData.temporadas || 
      !formData.lancamento || 
      !formData.diretor || 
      !formData.produtora || 
      !formData.categoria || 
      !formData.dataAssistido
    ) {
      setError('Todos os campos são obrigatórios.');
      return;
    }
    setError('');

    const formattedData = {
      ...formData,
      temporadas: Number(formData.temporadas),
      lancamento: Number(formData.lancamento)
    };

    if (editingSerie) {
      editarSerie(formattedData);
    } else {
      adicionarSerie(formattedData);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>{editingSerie ? 'Editar Série' : 'Cadastrar Nova Série'}</h2>
      
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Título:</label>
          <input 
            type="text" 
            name="titulo" 
            value={formData.titulo} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '5px' }} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Temporadas:</label>
          <input 
            type="number" 
            name="temporadas" 
            value={formData.temporadas} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '5px' }} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Ano de Lançamento:</label>
          <input 
            type="number" 
            name="lancamento" 
            value={formData.lancamento} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '5px' }} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Diretor:</label>
          <input 
            type="text" 
            name="diretor" 
            value={formData.diretor} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '5px' }} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Produtora:</label>
          <input 
            type="text" 
            name="produtora" 
            value={formData.produtora} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '5px' }} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Categoria:</label>
          <input 
            type="text" 
            name="categoria" 
            value={formData.categoria} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '5px' }} 
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block' }}>Data em que Assistiu:</label>
          <input 
            type="date" 
            name="dataAssistido" 
            value={formData.dataAssistido} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '5px' }} 
          />
        </div>

        <button type="submit" style={{ padding: '10px 15px', marginRight: '10px', background: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          {editingSerie ? 'Salvar Alterações' : 'Cadastrar'}
        </button>

        {editingSerie && (
          <button 
            type="button" 
            onClick={() => {
              setEditingSerie(null);
              setCurrentTab('listar');
            }} 
            style={{ padding: '10px 15px', background: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default SerieForm;
