import { Button, Grid } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import { BottomNavigation } from '@mui/material';
import myImage from '../unnamed.png'
import { fontGrid } from '@mui/material/styles/cssUtils';

const contentStyle =  {  margin: 'auto', background: 'rgb(251, 251, 251)',  padding: '20px', width: '250px'};

const Home = (props) => {
    return (
        <div style={{textAlign:"center"}}>
        <Grid container spacing={5} > 
        <Grid item xs={12}><h1 style={{ fontSize:'40px', fontWeight:'bold'}}>Please choose a survey to learn more about Sustainability</h1></Grid>
          <Grid item xs={12}><Button style={{ padding: "15px 220px", backgroundColor:'rgb(23,174,117)', fontSize:'27px', fontWeight:'bold'}} variant="contained" onClick={props.showWebsiteFrame1}>UN MyWorld Survey</Button></Grid>
          <Grid item xs={12}><Button style={{ padding: "15px 255px", backgroundColor:'rgb(23,174,117)', fontSize:'27px', fontWeight:'bold'}} variant="contained" onClick={props.showWebsiteFrame2}>PSU SDG Survey</Button></Grid>
          <Grid item xs={12}>
          <Popup trigger={<Button style={{ padding: "15px 280px", backgroundColor:'rgb(23,174,117)', fontSize:'27px', fontWeight:'bold'}} variant="contained">Learn More</Button>} {...{contentStyle}}>
            <span>The project aims to empower, encourage participation, give visibility, and make the community aware of the SDG badges for sustainability through this community engagement booth. <br></br>Please learn more about our project and join the sustainability journey by following us on <br></br>Instagram <i><b>@SustainGO_</b></i> and on <br></br>Twitter <i><b>@Sustain_GO</b></i></span>
          </Popup>
       
          </Grid>
          
        </Grid>
        <BottomNavigation style={{
          position: 'fixed',
          justifyContent:"left",
          left: 0,
          bottom: 0,
          height: '12.5%',
          width: '95%',}}>
        <img  src={myImage}/>
      
        </BottomNavigation>

        </div>
    );
  };
  
  export default Home;