import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Showcard from '../components/Showcard'

const styles = {
    page: {
        backgroundColor: '#efefef',
        height: '100vh',
        width: '100vw',
        
    }
}

function Career() {
    return (
        <>
            <div style={styles.page}>
                <Grid container spacing={2}>
                    <Grid item xs={12} mt={5}>
                        <Typography id="Typography" variant="h2" gutterBottom align="center">
                            CAREER
                        </Typography>
                    </Grid>
                     <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Typography id="Typography" variant="h6" gutterBottom align="center">
                            The beginning of knowledge is the discovery of something
                        </Typography>
                        <Typography id="Typography" variant="h6" gutterBottom align="center">
                            we do not understand - Frank Herbert
                        </Typography>
                    </Grid>
                     <Grid item xs={3}></Grid>
                </Grid>
                <Showcard/>
            </div>
        </>
    )
}

export default Career
