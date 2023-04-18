import { Button, Grid } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import { BottomNavigation } from '@mui/material';
import myImage from '../unnamed.png'

const contentStyle =  {  margin: 'auto', background: 'rgb(251, 251, 251)',  padding: '20px'};

const Home = (props) => {
    return (
        <div style={{textAlign:"center"}}>
        <Grid container spacing={2} > 
        <Grid item xs={12}><h1>Please choose a survey to learn more about Sustainability</h1></Grid>
          <Grid item xs={12}><Button style={{ padding: "15px 12px" }} variant="contained" onClick={props.showWebsiteFrame1}>UN MyWorld Survey</Button></Grid>
          <Grid item xs={12}><Button style={{ padding: "15px 12px" }} variant="contained" onClick={props.showWebsiteFrame2}>PSU SDG Survey</Button></Grid>
          <Grid item xs={12}>
          <Popup trigger={<Button style={{ padding: "15px 0px" }} variant="contained">Info</Button>} {...{contentStyle}}>
            <span>The project aims to understand the impact and importance of Sustainability while helping the community learn more about <br></br><b>Penn State's SDG-BASE™ </b>(Sustainable Development Goals - BAdges for Sustainability Engineering) micro-credential program</span>
          </Popup>
       
          </Grid>
          
        </Grid>
        <BottomNavigation style={{
          position: 'fixed',
          justifyContent:"left",
          left: 0,
          bottom: 0,
          
          width: '100%',}}>
        <img  src={myImage}/>
      
        </BottomNavigation>

        </div>
    );
  };
  
  export default Home;