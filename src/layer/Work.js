import React from "react"
import {Work,Work2,Work3} from "../components/Work_Career.js"
import Grid from '@mui/material/Grid';
import {Overlay} from "../components/Work_Overlay.js"
import Typography from '@mui/material/Typography';

export default function Landing() {
  const styles = {
    page: {
      cursor: 'auto'

    }
  }
  return (
    <div style={styles.page}>
      <Grid container>
        <Grid item xs={12}>
          <Work/>
        </Grid>
        <Grid item xs={12} m={10}>
          <Typography variant="body2" component="div" align="center">
          Code Hard, Travel Hard
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Work2/>
        </Grid>
        <Grid item xs={12} m={10}>
          <Typography variant="body2" component="div" align="center">
            Faster, Better
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Work3/>
        </Grid>
      </Grid>
    </div>
  )
}
