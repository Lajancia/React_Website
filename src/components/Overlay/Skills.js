import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Unstable_Grid2';

// const GlassCard = styled(Card)(({ theme }) => ({
//   backgroundColor: 'rgba(0, 0, 0, 0.1)',
// //   backdropFilter: 'blur(2px)',
//   color : '#ffffff',
//   boxShadow: theme.shadows[5],

// }));

function GlassSkillCard() {
    return (
    <div>
    
    <CardContent style={{backdropFilter: 'blur(0px)'}}>
    
        <Typography variant="h3" component="div" align="center" color="#FAB95B" mb={5} sx={{fontWeight:'bold'}}>
          SKILLS
        </Typography>
        <br/>
        <Grid container spacing={2} mb={10}>
        <Grid xs={12} sm={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   
            </Typography>
        </Grid>
        <Grid xs={12} sm={9}>
        <Typography variant="h5" component="div" forWeight="bold" color="#F5564E" sx={{fontWeight:'bold'}}>
        FRONTEND
        </Typography>
       <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>HTML</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>CSS</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>Javascript</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>REACT</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>REACT MUI</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>APEXCHART</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>REACT-THREE-FIBER</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>WEBGL</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>BLENDER</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>VUE</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>VUETIFY</Button>                
        </Grid>
       </Grid>
       
       <Grid container spacing={2} mb={10}>
        <Grid xs={12} sm={9} style={{textAlign:'right'}}>
        <Typography variant="h5" component="div"  forWeight="bold" color="#F5564E" sx={{fontWeight:'bold'}}>
        BACKEND
        </Typography>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>EXPRESS.JS</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>NODE.JS</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>MYBATIS</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>JAVA SPRING BOOT</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>JAVA</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>MYSQL</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>MARIADB</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>PYTHON</Button>               
        </Grid>
        <Grid xs={12} sm={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                
            </Typography>
        </Grid>
    </Grid>
        <Grid container spacing={2} mb={10} align="center">
        <Grid xs={12} style={{textAlign:'center'}}>
        <Typography variant="h5" component="div" forWeight="bold" color="#F5564E" sx={{fontWeight:'bold'}}>
            VERSION CONTROL
        </Typography>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>GITHUB</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>SVN</Button>
        </Grid>
        </Grid>
        <Grid xs={12} style={{textAlign:'center'}} mb={10}>
        <Typography variant="h5" component="div" forWeight="bold" color="#F5564E" sx={{fontWeight:'bold'}}>
            COMMUNICATION
        </Typography>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>SLACK</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>FIGMA</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>NOTION</Button>
        </Grid>
        <Grid container spacing={2} mb={10}>
        <Grid xs={12} sm={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            
            </Typography>
        </Grid>
        <Grid xs={12} sm={9}>
        <Typography variant="h5" component="div" forWeight="bold" color="#F5564E" sx={{fontWeight:'bold'}}>
        DEPLOYMENT
        </Typography>
       <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>LINUX UBUNTU</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>CYBERDUCK</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>FILEZILA</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>PUTTY</Button>
        </Grid>
       </Grid>
       
       <Grid container spacing={2} mb={10}>
        <Grid xs={12} sm={9} style={{textAlign:'right'}}>
        <Typography variant="h5" component="div"  forWeight="bold" color="#F5564E" sx={{fontWeight:'bold'}}>
        CERTIFICATION
        </Typography>
       <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>HTML</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>CSS</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}} sx={{":hover":{bgcolor:"#F5564E",color:"#F5564E"}}}>Javascript</Button>
        </Grid>
        <Grid xs={12} sm={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            
            </Typography>
        </Grid>
                </Grid>
      </CardContent>
    </div>
  );
}


export default GlassSkillCard