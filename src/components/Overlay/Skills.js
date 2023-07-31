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
    <ArrowBackIcon/>
        <Typography variant="h3" component="div" align="center" color="#FAB95B" mb={5}>
          SKILLS
        </Typography>
        <br/>
        <Grid container spacing={2} mb={10}>
        <Grid xs={12} sm={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
            </Typography>
           \
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
        </Grid>
        <Grid xs={12} sm={9}>
        <Typography variant="h5" component="div" forWeight="bold" color="#F5564E">
        FRONTEND
        </Typography>
       <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>HTML</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>CSS</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>Javascript</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>REACT</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>REACT MUI</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>APEXCHART</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>REACT-THREE-FIBER</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>WEBGL</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>BLENDER</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>VUE</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>VUETIFY</Button>                
        </Grid>
       </Grid>
       
       <Grid container spacing={2} mb={10}>
        <Grid xs={12} sm={9} style={{textAlign:'right'}}>
        <Typography variant="h5" component="div"  forWeight="bold" color="#F5564E">
        BACKEND
        </Typography>
       <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>HTML</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>CSS</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>Javascript</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>REACT</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>REACT MUI</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>APEXCHART</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>REACT-THREE-FIBER</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>WEBGL</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>BLENDER</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>VUE</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>VUETIFY</Button>                
        </Grid>
        <Grid xs={12} sm={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
            </Typography>
           \
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
        </Grid>
    </Grid>
        <Grid container spacing={2} mb={10} align="center">
        <Grid xs={12} style={{textAlign:'center'}}>
        <Typography variant="h5" component="div" forWeight="bold" color="#F5564E">
            VERSION CONTROL
        </Typography>
       <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>HTML</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>CSS</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>Javascript</Button>
        </Grid>
       </Grid>
       <Grid xs={12} style={{textAlign:'center'}} mb={10}>
        <Typography variant="h5" component="div" forWeight="bold" color="#F5564E">
            COMMUNICATION
        </Typography>
       <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>HTML</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>CSS</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>Javascript</Button>
        </Grid>
        <Grid container spacing={2} mb={10}>
        <Grid xs={12} sm={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
            </Typography>
           \
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
        </Grid>
        <Grid xs={12} sm={9}>
        <Typography variant="h5" component="div" forWeight="bold" color="#F5564E">
        DEPLOYMENT
        </Typography>
       <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>HTML</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>CSS</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>Javascript</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>REACT</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>REACT MUI</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>APEXCHART</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>REACT-THREE-FIBER</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>WEBGL</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>BLENDER</Button>
        <br/>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>VUE</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>VUETIFY</Button>                
        </Grid>
       </Grid>
       
       <Grid container spacing={2} mb={10}>
        <Grid xs={12} sm={9} style={{textAlign:'right'}}>
        <Typography variant="h5" component="div"  forWeight="bold" color="#F5564E">
        CERTIFICATION
        </Typography>
       <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>HTML</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>CSS</Button>
        <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>Javascript</Button>
        </Grid>
        <Grid xs={12} sm={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
            </Typography>
        
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
        </Grid>
                </Grid>
      </CardContent>
    </div>
  );
}


export default GlassSkillCard