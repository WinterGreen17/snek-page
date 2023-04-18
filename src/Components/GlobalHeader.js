import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const GlobalHeader = (props) => {
    return (
      <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        Sustainability on the GO!
        </Typography>
        <Button variant='outlined' color="inherit" onClick={props.onClick}>Home</Button>
      </Toolbar>
    </AppBar>
    );
  };
  
  export default GlobalHeader;