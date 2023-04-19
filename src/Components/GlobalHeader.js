import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const GlobalHeader = (props) => {
    return (
      <AppBar position="static" style={{backgroundColor:'green'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Stuart da Snek
        </Typography>
        <Button variant='outlined' color="inherit" onClick={props.onClick}>Home</Button>
      </Toolbar>
    </AppBar>
    );
  };
  
  export default GlobalHeader;