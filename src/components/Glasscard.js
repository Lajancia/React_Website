import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
function GlassWorkCard() {
  return (
    <GlassCard>
      <CardContent>
        <Typography variant="h5" component="div">
          Work Experience
        </Typography>
        <br/>
        <Typography variant="body2">
         INTERN
        </Typography>
        <Typography variant="h5" component="div" >
          commON SRL, <br/>an Italian fashion magazine publishing company
        </Typography>
        <Typography >
          November 2020 - May 2021 <br/>(Remote from November 2020 - March 2021, <br/>On-site from March 2021 - May 2021)
        </Typography>
        <Typography variant="body2">
          - Created the company’s main marketing website using Vue.js
        </Typography>
        <Typography variant="body2">
          - Worked with team members to meet the designer’s requirements and complete the website.
        </Typography>
        <br />
        <br/>
        <Typography variant="body2">
         WEB DEVELOPER
        </Typography>
        <Typography variant="h5" component="div" >
        Yura Corporation R&D Center
        </Typography>
        <Typography >
          October 2022 - Present
        </Typography>
        <Typography variant="body2">
          - Web development using React.js and Java Spring Boot
        </Typography>
        <Typography variant="body2">
          - Big data management using Mariadb
        </Typography>
      </CardContent>
    </GlassCard>
  );
}

function GlassSkillCard() {
  return (
    <GlassCard>
      <CardContent>
        <Typography variant="h5" component="div">
          Tech Skills
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px'}}>Javascript</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px' }}>Blender3D</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px' }}>React.js</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin:'5px' }}>Java</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white',margin:'5px' }}>Linux</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white',margin:'5px' }}>Mariadb</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>GIT</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white', margin: '5px' }}>Vue.js</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white',margin:'5px' }}>Node.js</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white',margin:'5px' }}>Java spring Boot</Button>
        </Typography>
        <br/>
        <Typography variant="body2">
          2018.02 - 2023.02
        </Typography>
        <Typography variant="h5" component="div">
          Hankuk University of Foreign Studies
        </Typography>
        <Typography >
          Graduation
        </Typography>
        <Typography variant="body2">
          Majored in Computer Electronic Systems and studied Spanish translation as a minor.
        </Typography>
        <br/>
        <Typography variant="body2">
          2022.02
        </Typography>
        <Typography variant="h5" component="div">
          AZURE- 900
        </Typography>
        <Typography >
          Certificate
        </Typography>
        <Typography variant="body2">
          Achieved Microsoft AZURE fundamental certification to learn how to use Cloud service.
        </Typography>
        <br />
        <Typography variant="body2">
          2021.12
        </Typography>
        <Typography variant="h5" component="div">
          ADsP
        </Typography>
        <Typography >
          Certificate
        </Typography>
        <Typography variant="body2">
          Achieved Data Analysis certification during the study of AI programming
        </Typography>
      </CardContent>
    </GlassCard>
  );
}

export {Glasscard,GlassDisplayCard,GlassSkillCard,GlassWorkCard}