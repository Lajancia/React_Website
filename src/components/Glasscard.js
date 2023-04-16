import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const GlassCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  backdropFilter: 'blur(8px)',

//   boxShadow: theme.shadows[5],
  height:'100vh'
}));

export default function GlassmorphismCard() {
  return (
    <GlassCard>
      <CardContent>
        <Typography variant="h5" component="div">
          Glassmorphism Card
        </Typography>
        <Typography variant="body2">
          This is an example of a card using the Glassmorphism effect.
        </Typography>
      </CardContent>
    </GlassCard>
  );
}