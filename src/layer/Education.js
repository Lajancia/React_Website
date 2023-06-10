import React ,{useEffect}from 'react';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { GlassDisplayCard } from '../components/Glasscard';

const Education = () => {
    const location = useLocation();
    useEffect(() => {
        document.body.style.cursor = 'auto';
      }, [location]);

  return (
    <div >
        <Grid container>
        <Grid item xs={12} style={{ height: '60vh' }}>
            <h1>Hello world</h1>
        </Grid>
        <Grid container xs={12} spacing={5} margin={4} style={{ height: '40vh' }}>
            <Grid item xs={4}><GlassDisplayCard/></Grid>
            <Grid item xs={4}><GlassDisplayCard/></Grid>
            <Grid item xs={4}><GlassDisplayCard/></Grid>
        </Grid>
        </Grid>
    </div>
  );
};

export default Education;