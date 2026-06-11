import React from 'react';

function NavBar({ currentTab, setCurrentTab, setEditingSerie }) {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
      <button 
        onClick={() => setCurrentTab('home')}
        style={{ marginRight: '10px', fontWeight: currentTab === 'home' ? 'bold' : 'normal' }}
      >
        Página Inicial
      </button>
      <button 
        onClick={() => setCurrentTab('sobre')}
        style={{ marginRight: '10px', fontWeight: currentTab === 'sobre' ? 'bold' : 'normal' }}
      >
        Sobre
      </button>
      <button 
        onClick={() => {
          setEditingSerie(null);
          setCurrentTab('cadastrar');
        }}
        style={{ marginRight: '10px', fontWeight: currentTab === 'cadastrar' ? 'bold' : 'normal' }}
      >
        Cadastrar Séries
      </button>
      <button 
        onClick={() => setCurrentTab('listar')}
        style={{ fontWeight: currentTab === 'listar' ? 'bold' : 'normal' }}
      >
        Lista de Séries
      </button>
    </nav>
  );
}

export default NavBar;
