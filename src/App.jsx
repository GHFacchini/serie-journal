import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box, Typography, Paper } from '@mui/material';
import NavBar from './components/NavBar';
import SerieForm from './components/SerieForm';
import SerieList from './components/SerieList';

function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', backgroundColor: '#fafafa' }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          SERIE-JOURNAL
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Bem-vindo ao seu diário de séries. Acompanhe e registre todas as séries que você já assistiu de forma simples e organizada.
        </Typography>
      </Paper>
    </Container>
  );
}

function Sobre() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#fafafa' }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          Sobre o Projeto
        </Typography>
        <Typography variant="body1" paragraph>
          Este sistema foi desenvolvido como trabalho prático para a disciplina de Desenvolvimento de Sistemas Frontend.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Objetivo:</strong> Evoluir o projeto praticando conceitos mais avançados de React:
        </Typography>
        <ul>
          <li><Typography variant="body1">Roteamento SPA utilizando <code>react-router-dom</code>.</Typography></li>
          <li><Typography variant="body1">Consumo de APIs REST utilizando a biblioteca <code>axios</code>.</Typography></li>
          <li><Typography variant="body1">Estilização moderna e componentes ricos utilizando o framework <code>Material-UI</code>.</Typography></li>
        </ul>
      </Paper>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5', pb: 4 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrar" element={<SerieForm />} />
          <Route path="/listar" element={<SerieList />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
