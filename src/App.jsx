import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SerieForm from './components/SerieForm';
import SerieList from './components/SerieList';

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [editingSerie, setEditingSerie] = useState(null);
  const [series, setSeries] = useState([
    {
      id: 1,
      titulo: 'Breaking Bad',
      temporadas: 5,
      lancamento: 2008,
      diretor: 'Vince Gilligan',
      produtora: 'Sony Pictures Television',
      categoria: 'Drama',
      dataAssistido: '2023-05-15'
    },
    {
      id: 2,
      titulo: 'Stranger Things',
      temporadas: 4,
      lancamento: 2016,
      diretor: 'The Duffer Brothers',
      produtora: 'Netflix',
      categoria: 'Ficção Científica',
      dataAssistido: '2024-01-10'
    }
  ]);

  const adicionarSerie = (novaSerie) => {
    const serieComId = { ...novaSerie, id: Date.now() };
    setSeries([...series, serieComId]);
    setCurrentTab('listar');
  };

  const editarSerie = (serieAtualizada) => {
    setSeries(series.map(s => s.id === serieAtualizada.id ? serieAtualizada : s));
    setEditingSerie(null);
    setCurrentTab('listar');
  };

  const deletarSerie = (id) => {
    setSeries(series.filter(s => s.id !== id));
  };

  return (
    <div className="app-container">
      <NavBar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        setEditingSerie={setEditingSerie} 
      />
      
      <main className="content">
        {currentTab === 'home' && (
          <div className="tab-content">
            <h1>SERIE-JOURNAL</h1>
            <p>Bem-vindo ao seu diário de séries. Acompanhe e registre todas as produções que você já assistiu de forma simples e organizada.</p>
          </div>
        )}

        {currentTab === 'sobre' && (
          <div className="tab-content">
            <h1>Sobre o Projeto</h1>
            <p>Este sistema foi desenvolvido como trabalho prático para a disciplina de Desenvolvimento de Sistemas Frontend.</p>
            <p>Objetivo: Praticar os conceitos iniciais do React, incluindo estado (useState), passagem de propriedades (props) e renderização condicional de componentes.</p>
          </div>
        )}

        {currentTab === 'cadastrar' && (
          <SerieForm 
            adicionarSerie={adicionarSerie} 
            editarSerie={editarSerie} 
            editingSerie={editingSerie} 
            setEditingSerie={setEditingSerie}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'listar' && (
          <SerieList 
            series={series} 
            deletarSerie={deletarSerie} 
            setEditingSerie={(serie) => {
              setEditingSerie(serie);
              setCurrentTab('cadastrar');
            }} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
