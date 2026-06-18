import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          SERIE-JOURNAL
        </Typography>
        <Box>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
          >
            Página Inicial
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/sobre"
          >
            Sobre
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/cadastrar"
          >
            Cadastrar Séries
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/listar"
          >
            Lista de Séries
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
