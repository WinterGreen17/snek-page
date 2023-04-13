import logo from './logo.svg';
import './App.css';

import GlobalHeader from './Components/GlobalHeader';
import { Button, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <GlobalHeader />
      <h1>Hello world!</h1>
      <Grid container spacing={2} >
        <Grid item xs={12}><Button size='large' variant="contained" >Survey 1</Button></Grid>
        <Grid item xs={12}><Button size='large' variant="contained" >Survey 2</Button></Grid>
        <Grid item xs={12}><Button size='large' variant="contained" >Info</Button></Grid>

      </Grid>

     

      
    </div>
  );
}

export default App;
