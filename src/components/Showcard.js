import React from 'react'
import Grid from '@mui/material/Grid';
import Image from '../assets/edu.png'
import './Showcard.css'
import './index.css';


function Showcard() {
    return (
        <>
            <Grid container spacing={3} mt={5}>
                <Grid item xs={4} align="right" >
                <div class="container">
                <img src={Image} alt="Avatar" class="image"/>
                <div class="overlay">
                    <div class="text">OUTSOURCING</div>
                </div>
                </div>
                </Grid>
                <Grid item xs={4} align="center">
                <div class="container">
                <img src={Image} alt="Avatar" class="image"/>
                <div class="overlay">
                    <div class="text">INTERN</div>
                </div>
                </div>
                </Grid>
                <Grid item xs={4} align="left">
                <div class="container">
                <img src={Image} alt="Avatar" class="image"/>
                <div class="overlay">
                    <div class="text">COMPANY</div>
                </div>
                </div>
                </Grid>
            </Grid>

        </>
    )
}

export default Showcard


