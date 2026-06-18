import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Paper, Typography, TextField, Button, Box, Alert } from '@mui/material';

function SerieForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const editingSerie = location.state?.editingSerie || null;

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

  const handleSubmit = async (e) => {
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

    try {
      if (editingSerie) {
        await axios.put(`http://localhost:5000/series/${editingSerie.id}`, formattedData);
      } else {
        await axios.post('http://localhost:5000/series', formattedData);
      }
      navigate('/listar');
    } catch (err) {
      setError('Ocorreu um erro ao salvar a série. Verifique se o servidor API está rodando.');
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="primary" sx={{ fontWeight: 'bold' }}>
          {editingSerie ? 'Editar Série' : 'Cadastrar Nova Série'}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Título"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Temporadas"
            name="temporadas"
            type="number"
            value={formData.temporadas}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Ano de Lançamento"
            name="lancamento"
            type="number"
            value={formData.lancamento}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Diretor"
            name="diretor"
            value={formData.diretor}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Produtora"
            name="produtora"
            value={formData.produtora}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Data em que assistiu"
            name="dataAssistido"
            type="date"
            InputLabelProps={{ shrink: true }}
            // tive que colocar esse slotProps porque a label estava bugando com o campo de data
            slotProps={{ inputLabel: { shrink: true } }}
            value={formData.dataAssistido}
            onChange={handleChange}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ px: 4 }}
            >
              {editingSerie ? 'Salvar' : 'Cadastrar'}
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => navigate('/listar')}
              sx={{ px: 4 }}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default SerieForm;
