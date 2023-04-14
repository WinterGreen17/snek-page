import { Button, Grid } from '@mui/material';

const Home = (props) => {
    return (
        <div style={{textAlign:"center"}}>
        <Grid container spacing={2} >
        <Grid item xs={12}><h1>Hello world!</h1></Grid>
          <Grid item xs={12}><Button size='large' variant="contained" onClick={props.showWebsiteFrame1} >Survey 1</Button></Grid>
          <Grid item xs={12}><Button size='large' variant="contained" onClick={props.showWebsiteFrame2}>Survey 2</Button></Grid>
          <Grid item xs={12}><Button size='large' variant="contained" onClick={props.handleButtonClick}>Info</Button>
       
          </Grid>
          
        </Grid></div>
    );
  };
  
  export default Home;