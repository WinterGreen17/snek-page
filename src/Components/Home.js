import { Button, Grid } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

const Home = (props) => {
    return (
        <div style={{textAlign:"center"}}>
        <Grid container spacing={2} >
        <Grid item xs={12}><h1>Please choose a survey to learn more about Sustainability</h1></Grid>
          <Grid item xs={12}><Button size='large' variant="contained" onClick={props.showWebsiteFrame1}>UN MyWorld Survey</Button></Grid>
          <Grid item xs={12}><Button size='large' variant="contained" onClick={props.showWebsiteFrame2}>PSU SDG Survey</Button></Grid>
          <Grid item xs={12}>
          <Popup trigger={<Button size='large' variant="contained">    Info    </Button>}>
            <>This app is fun</>
          </Popup>
       
          </Grid>
          
        </Grid></div>
    );
  };
  
  export default Home;