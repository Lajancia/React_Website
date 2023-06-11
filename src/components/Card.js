import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({category,title,duration,explain}) {
  return (
    <Card sx={{ minWidth: 275,backgroundColor: '#1A2027' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: '#a3a3a3' }} gutterBottom>
          {category}
        </Typography>
        <Typography variant="h5" component="div" sx={{ color: 'white'}}>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5, color: 'white'}} >
          {duration}
        </Typography>
        <Typography variant="body2" sx={{color: 'white'}}>
         {explain}
        </Typography>
      </CardContent>
     
    </Card>
  );
}