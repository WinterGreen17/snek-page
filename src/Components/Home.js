import { Button, Grid } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { BottomNavigation } from '@mui/material';
import myImage from '../unnamed.png'

const Home = (props) => {
    return (
        <div style={{textAlign:"center"}}>
        <Grid container spacing={9} >
        <Grid item xs={12} ><h1 style={{ width: "100%", fontSize:'41px', fontWeight:'bold'}}>Please choose a survey to learn more about Sustainability</h1></Grid>
          <Grid item xs={12} ><Button style={{ width: "95%", height:'100%', backgroundColor:'rgb(23,174,117)', fontSize:'37px', fontWeight:'bold'}} variant="contained" onClick={props.showWebsiteFrame1}>UN MyWorld Survey</Button></Grid>
          <Grid item xs={12} ><Button style={{ width: "95%", height:'100%', backgroundColor:'rgb(23,174,117)', fontSize:'37px', fontWeight:'bold'}} variant="contained" onClick={props.showWebsiteFrame2}>PSU SDG Survey</Button></Grid>
          <Grid item xs={12}>
          <Popup contentStyle={{
        width: '70%',
        height: '27%',
      }} trigger={<Button style={{ width: "95%", height:'100%', backgroundColor:'rgb(23,174,117)', fontSize:'37px', fontWeight:'bold'}} size='large' variant="contained" color='success'>Info</Button>}>
          <span style={{fontSize:'23px'}}>The project aims to empower, encourage participation, give visibility, and make the community aware of the SDG badges for sustainability through this community engagement booth. <br></br>Please learn more about our project and join the sustainability journey by following us on <br></br>Instagram <i><b>@SustainGO_</b></i> and on <br></br>Twitter <i><b>@Sustain_GO</b></i></span>
        
          </Popup> 
       
          </Grid>
          
        </Grid>

        <BottomNavigation style={{
    position: 'fixed',
    justifyContent:"left",
    left: 0,
    bottom: 0,
    width: '100%',
    height:'9%'}}>
    <img alt='psu' src={myImage}/>
      
    </BottomNavigation>
        </div>
    );
  };
  
  export default Home;