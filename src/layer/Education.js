import React ,{useEffect}from 'react';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Glasscard } from '../components/Glasscard';
import BasicCard from '../components/Card';
import Button from '@mui/material/Button';
import { useNavigate  } from 'react-router-dom';
import Eduction from '../components/Education_banner';

const Education = () => {
    const location = useLocation();
    useEffect(() => {
        document.body.style.cursor = 'auto';
      }, [location]);
      const navigate = useNavigate();

      const handleClick = () => {
        navigate('/');
      };
  return (
    <div style={{ backgroundColor: '#101010',
    background: 'radial-gradient(circle at bottom center, #212121 0%, #101010 80%)'}} >
        <Grid container>
        <Grid item xs={12} style={{ height: '100vh' }}>
           <Eduction/>
        </Grid>
        <Grid container xs={12} spacing={5} margin={4} >
            <Grid item xs={12} sm={12} md={4} style={{ padding: '4px'}}>
              <BasicCard
                category={'Graduation'}
                title={'Hankuk University of Forien Studies'}
                duration={'2018.02 - 2023.02'}
                explain={'Majored in Computer Electronic Systems and studied Spanish translation as a minor.'}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} style={{ padding: '4px'}}>
            <BasicCard
             category={'Certificate'}
             title={'AZURE- 900'}
             duration={'2022.02'}
             explain={'Achieve Microsoft AZURE fundamental certification to learn how to use Cloud service.'}
            />
            </Grid>
            <Grid item xs={12} sm={12} md={4} style={{ padding: '4px'}}>
            <BasicCard
             category={'Certificate'}
             title={'ADsP'}
             duration={'2021.12'}
             explain={'Data Analysis certification during the study of AI programming'}
            />
            </Grid>
            <Grid item xs={12} style={{ paddingLeft: '0px'}}>
            <div style={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              style={{ color: 'white', borderColor: 'white' }}
              onClick={handleClick}
            >
          Go Back Home
        </Button>
        </div>
        </Grid>
        </Grid>
        
        </Grid>
    </div>
  );
};

export default Education;