import React, { forwardRef } from "react"
import Button from '@mui/material/Button';
import './index.css'
import {Glasscard,GlassDisplayCard} from '../components/Glasscard'
import { useNavigate  } from 'react-router-dom';

const Overlay = ()=>{
  return(
      <div class="frame">
        <h3 class="title"> WORK </h3>
        <div class="captions">
          <Glasscard 
          word={"The Long Time Life Project - A.K.A Work - will be displayed in this page. Start from 2021 to now. "}/>
        </div>
        <div class="captions">
          <Glasscard
          word={"Although my Work Career is not that long, I always believe it will be long enough to show my Efforts in the End."}/>
        </div>
        <div class="captions">
          <Glasscard
          word={" Frank Herbert said that 'The beginning of knowledge is the discovery of something we do not understand'. To me, Programming is always the mystery knowledge. And the unknown thing is always appealing."}
          />
        </div>
      </div> 
  )
  
}

const Overlay2 = ()=>{
  return(
      <div class="frame">
        <h1 class="title">INTERN</h1>
        <div class="captions">
          <Glasscard 
            title={"Duration: "}
            word={"November 2020 - May 2021 (Remote from November 2020 - March 2021, On-site from March 2021 - May 2021)"}/>
        </div>
        <div class="captions">
          <Glasscard 
            title={"Company:"}
            word={" commON SRL, an Italian fashion magazine publishing company"}/>
        </div>
        <div class="captions">
          <Glasscard 
            title={"Role: "}
            word={"Intern"}/>
        </div>
        <div class="captions">
          <GlassDisplayCard
            title={"Responsibilities:"}
            word={"- Created the company’s main marketing website using Vue.js"}
            word2={"- Worked with team members to meet the designer’s requirements and complete the website"}
          />
        </div>
        <div class="captions">
          <GlassDisplayCard
            title={"Achievements:"}
            word={" - Successfully completed the website, allowing customers to view the company’s portfolio and purchase magazines"}
            word2={"- Gained web development skills and overseas work experience"}
          />
        </div>
      </div> 
  )
  
}

const Overlay3 = ()=>{
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return(
      <div class="frame">
        <h1 class="title">WEB DEVELOPER</h1>
        <div class="captions">
          <Glasscard 
            title={"Duration: "}
            word={"October 2022 - Present"}/>
        </div>
        <div class="captions">
          <Glasscard 
            title={"Company:"}
            word={"Yura Corporation R&D Center"}/>
        </div>
        <div class="captions">
          <Glasscard 
            title={"Role:"}
            word={"Web Developer in the Development Team"}/>
        </div>
         <div class="captions">
          <GlassDisplayCard
            title={"Responsibilities:"}
            word={"- Web development using React.js and Java Spring Boot"}
            word2={"- Big data management using Mariadb"}
          />
        </div>
        <div class="captions">
          <GlassDisplayCard
            title={"Achievements:"}
            word={"- Contributed to the development of a smart factory web in Serbia"}
            word2={"- Developed data collection and parsing"}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
        <Button
      variant="outlined"
      style={{ color: 'white', borderColor: 'white' }}
      onClick={handleClick}
    >
      Go Back Home
    </Button>
    </div>
      </div> 
  )
  
}
export {Overlay,Overlay2,Overlay3} 
