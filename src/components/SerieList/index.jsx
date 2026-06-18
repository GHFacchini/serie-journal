import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  Container, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Box,
  Alert
} from '@mui/material';

function SerieList() {
  const navigate = useNavigate();
  const [series, setSeries] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [error, setError] = useState('');

  const fetchSeries = async () => {
    try {
      const response = await axios.get('http://localhost:3001/series');
      setSeries(response.data);
      setError('');
    } catch (err) {
      setError('Erro ao carregar as séries da API. Verifique se o servidor JSON-Server está rodando na porta 3001.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Deseja realmente excluir esta série?')) {
      try {
        await axios.delete(`http://localhost:3001/series/${id}`);
        setSeries(prev => prev.filter(serie => serie.id !== id));
      } catch (err) {
        setError('Erro ao deletar a série da API.');
        console.error(err);
      }
    }
  };

  const filteredSeries = series.filter(serie => {
    const term = filterText.toLowerCase();
    return (
      (serie.titulo && serie.titulo.toLowerCase().includes(term)) ||
      (serie.categoria && serie.categoria.toLowerCase().includes(term))
    );
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
          Lista de Séries
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Filtrar por Título ou Categoria"
            placeholder="Buscar..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </Box>

        <TableContainer component={Paper} elevation={1}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Título</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Temporadas</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Lançamento</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Diretor</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Produtora</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Categoria</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Data Assistido</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSeries.length > 0 ? (
                filteredSeries.map((serie) => (
                  <TableRow key={serie.id} hover>
                    <TableCell>{serie.titulo}</TableCell>
                    <TableCell>{serie.temporadas}</TableCell>
                    <TableCell>{serie.lancamento}</TableCell>
                    <TableCell>{serie.diretor}</TableCell>
                    <TableCell>{serie.produtora}</TableCell>
                    <TableCell>{serie.categoria}</TableCell>
                    <TableCell>{serie.dataAssistido}</TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                        <Button 
                          variant="contained" 
                          color="primary" 
                          size="small"
                          onClick={() => navigate('/cadastrar', { state: { editingSerie: serie } })}
                        >
                          Editar
                        </Button>
                        <Button 
                          variant="contained" 
                          color="error" 
                          size="small"
                          onClick={() => handleDelete(serie.id)}
                        >
                          Excluir
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    Nenhuma série encontrada.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default SerieList;
