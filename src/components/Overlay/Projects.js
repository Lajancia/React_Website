import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Unstable_Grid2';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';

function GlassProjectCard() {
    return (
    <div>
    <CardContent style={{backdropFilter: 'blur(0px)'}}>
    <ArrowBackIcon/>
        <Typography variant="h3" component="div" forWeight="bold" align="center" color="#FAB95B">
        PROJECTS
        </Typography>
        <br/>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid xs={12} sm={5}>
            {/* <Card sx={{ minWidth: 200 }}> */}
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={12} sm={4}>
                    <PersonIcon style={{fontSize:'6em', margin:'5px', color:'#F5564E'}}/>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Typography variant="h4">NAME</Typography>
                    <Typography variant="h6">Soomin Hwang</Typography>              
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={12} sm={5}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={12} sm={4}>
                    <EmailIcon style={{fontSize:'6em', margin:'5px', color:'#F5564E'}}/>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Typography variant="h4">EMAIL</Typography>
                    <Typography variant="h6">kie6974@gmail.com</Typography>              
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={12}/>            
        <Grid xs={12} sm={5}>
         <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={12} sm={4}>
                    <CalendarMonthIcon style={{fontSize:'6em', margin:'5px', color:'#F5564E'}}/>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Typography variant="h4">BIRTHDAY</Typography>
                    <Typography variant="h6">1999.02.04</Typography>              
                </Grid>
            </Grid>
        </Grid>
        <Grid xs={12} sm={5}>
         <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={12} sm={4}>
                    <SchoolIcon style={{fontSize:'6em', margin:'5px', color:'#F5564E'}}/>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Typography variant="h4">GRADUATE</Typography>
                    <Typography variant="h6">Hankuk University of <br/> Foreign Studies</Typography>              
                </Grid>
                <Grid xs={12} justifyContent="center" alignItems="center">(Major - Computer Electronic System)</Grid>
            </Grid>
            
        </Grid>             
       </Grid>
      </CardContent>
    </div>
  );
}


export default GlassProjectCard