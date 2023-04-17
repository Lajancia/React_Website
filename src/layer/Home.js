/*eslint-disable-next-line*/
/*eslint-disable-next-line*/
import React from 'react'
import Image from '../assets/home.png'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import './Home.css'


import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';
import InstagramIcon from '@mui/icons-material/Instagram';
import CollectionsIcon from '@mui/icons-material/Collections';
import Tooltip from '@mui/material/Tooltip';


const styles = {
    home: {
        backgroundImage: `url(${Image})`,
        height: '100vh',
        // width: '100vw',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        verticalAlign:'baseline'

    },
    text: {
        display: 'flex',
     
        justifyContent: 'center', /* Align horizontal */
        alignItems: 'center', /* Align vertical */
    }
    
}

function Home() {
    return (
        <div style={styles.home}>
            <Box minHeight="27vh">
            </Box>
            <Box  display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="48vh">
                <Grid container >
                    <Grid item xs={6} mr={8} pr={6}>
                        {/* <h3 align="right"></h3> */}
                        <Typography id="Typography" variant="h4" gutterBottom align="right">
                            <a href="/#" class="effect-underline">RESUME</a>
                        </Typography>
                         <Typography id="Typography" variant="h4" gutterBottom align="right">
                            <a href="/#" class="effect-underline">GALLERY</a>
                        </Typography>
                         <Typography id="Typography" variant="h4" gutterBottom align="right">
                            <a href="/#" class="effect-underline">PROJECTS</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={12}>
                        
                    </Grid>
                    
                </Grid>  
            </Box>
            <Box minHeight="25vh" align="center">
                <a href="https://github.com/Lajancia">
                    <Tooltip title="GitHub">
                        <GitHubIcon sx={{ fontSize: 50, marginRight:5, color:"black"}}/>            
                    </Tooltip>
                </a>
                <a href="https://lajancia.github.io/">
                    <Tooltip title="Blog">
                        <BookIcon  sx={{ fontSize: 50, marginRight:5, color:"black"}}/>            
                    </Tooltip>
                </a>
                <a href="https://www.instagram.com/lajancia/">
                    <Tooltip title="Instagram">
                        <InstagramIcon sx={{ fontSize: 50, marginRight:5, color:"black"}}/>         
                    </Tooltip>
                </a>
                <Tooltip title="Gallery">
                    <CollectionsIcon sx={{ fontSize: 50, color:"black"}}/>           
                </Tooltip>
                
            </Box>
            
            
           
        </div>
    );
}

export default Home
