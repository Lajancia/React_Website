import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from '../assets/edu.png'
import './Showcard.css'

const styles = {
    paper: {
        backgroundImage: `url(${Image})`,
        width: '20vw',
        height: '50vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        verticalAlign:'baseline'
        
    }
}
function Showcard() {
    return (
        <>
            <Grid container spacing={3} mt={5}>
                <Grid item xs={4} align="right" >
                    <Paper elevation={3} style={styles.paper} />
                    <div class="overlay">
                        <div class="text">Hello World</div>
                    </div>
                </Grid>
                <Grid item xs={4} align="center">
                    <Paper elevation={3} style={styles.paper} />
                </Grid>
                <Grid item xs={4} align="left">
                    <Paper elevation={3} style={styles.paper} />
                </Grid>
            </Grid>
        </>
    )
}

export default Showcard
