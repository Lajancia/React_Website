import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const GlassCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(4px)',
  color : '#ffffff',
//   boxShadow: theme.shadows[5],

}));

 function Glasscard({title, word}) {
  return (
    <GlassCard>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {word}
        </Typography>
      </CardContent>
    </GlassCard>
  );
}

function GlassDisplayCard({title, word, word2, word3, word4}) {
  return (
    <GlassCard>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {word}
        </Typography>
        <Typography variant="body2">
          {word2}
        </Typography>
        <Typography variant="body2">
          {word3}
        </Typography>
        <Typography variant="body2">
          {word4}
        </Typography>
      </CardContent>
    </GlassCard>
  );
}

export {Glasscard,GlassDisplayCard}