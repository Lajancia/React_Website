import React from 'react';
import Image from '../assets/react.png'
import Glasscard from '../components/Glasscard'

import Grid from '@mui/material/Grid';

const styles = {
    home: {
        backgroundImage: `url(${Image})`,
        height: '100vh',
        // width: '100vw',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        verticalAlign:'baseline'

    }
}

const Projects = () => {
    return (
        <div style={styles.home}>
             <Grid container>
                    <Grid item xs={6} >
                 
                    </Grid>
                    <Grid item xs={6}>
                    <Glasscard/>
                    </Grid>
                  
                </Grid>
           
        </div>
    );
};

export default Projects;