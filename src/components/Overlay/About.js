import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Unstable_Grid2';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import Paper from '@mui/material/Paper';

function GlassWorkCard() {
    return (
    <div>
    <CardContent style={{backdropFilter: 'blur(0px)'}}>
        <Typography variant="h3" component="div" fontWeight="bold" align="center" color="#FAB95B" sx={{fontWeight:'bold'}}>
        ABOUT ME
        </Typography>
        <br/>
        <Paper style={{maxHeight: '50vh',overflow: 'auto', backgroundColor:'transparent', color:'white'}} elevation={0}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{maxWidth: '100%'}}>
        <Grid xs={12} sm={5}>
            {/* <Card sx={{ minWidth: 200 }}> */}
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={12} sm={4}>
                    <PersonIcon style={{fontSize:'5em', margin:'5px', color:'#F5564E'}}/>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Typography variant="h4" sx={{fontWeight:'bold'}}>NAME</Typography>
                    <Typography variant="h6">Soomin Hwang</Typography>              
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={12} sm={5}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={12} sm={4}>
                    <EmailIcon style={{fontSize:'5em', margin:'5px', color:'#F5564E'}}/>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Typography variant="h4" sx={{fontWeight:'bold'}}>EMAIL</Typography>
                    <Typography variant="h6">kie6974@gmail.com</Typography>              
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={12}/>            
        <Grid xs={12} sm={5}>
         <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={12} sm={4}>
                    <CalendarMonthIcon style={{fontSize:'5em', margin:'5px', color:'#F5564E'}}/>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Typography variant="h4" sx={{fontWeight:'bold'}}>BIRTHDAY</Typography>
                    <Typography variant="h6">1999.02.04</Typography>              
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={12} sm={5}>
         <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={12} sm={4}>
                    <SchoolIcon style={{fontSize:'5em', margin:'5px', color:'#F5564E'}}/>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Typography variant="h4" sx={{fontWeight:'bold'}}>GRADUATE</Typography>
                    <Typography variant="h6">Hankuk University of <br/> Foreign Studies</Typography>              
                </Grid>
                <Grid xs={12} justifyContent="center" alignItems="center">(Major - Computer Electronic System)</Grid>
            </Grid>
            
        </Grid>             
       </Grid>
      </Paper>
      </CardContent>
    </div>
  );
}

export default GlassWorkCard