import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const GlobalHeader = (props) => {
    return (
      <AppBar position="static" style={{backgroundColor:'rgb(23,174,117)'}}>
      <Toolbar style={{ padding: '10px 35px'}}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        <b>Sustainability on the GO!</b>
        </Typography>
        <Button variant='outlined' color="inherit" onClick={props.onClick}>Home</Button>
      </Toolbar>
    </AppBar>
    );
  };
  
  export default GlobalHeader;