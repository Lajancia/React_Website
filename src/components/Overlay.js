import React, { forwardRef } from "react"
import {Dialog,DialogContent } from '@mui/material';
import GlassWorkCard from './Overlay/About'
import GlassSkillCard from './Overlay/Skills'
import GlassCareerCard from './Overlay/Career'
import GlassProjectCard from './Overlay/Projects'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CardContent from '@mui/material/CardContent';

const GlassCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(34, 34, 34, 0.6)',
  backdropFilter: 'blur(4px)',
  color : '#ffffff',
  boxShadow: theme.shadows[5]

}));

const CustomDialog = ({selectComponent,setSelectedComponent,title,word}) => {
  const handleClose = () => {
    setSelectedComponent('overlay');
  };

  return (
    <div>
      <Dialog
        maxWidth={1000}
        open={selectComponent!=='overlay'? true : false}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            width:'70%'
          },
        }}
        BackdropProps={{ invisible: true }}
      >
        {/* Your dialog content here */}
        <DialogContent  >
          <GlassCard>
            <CardContent >
              <ArrowBackIcon onClick={handleClose}/>
            </CardContent>
            
            {selectComponent === 'coffee' && <GlassWorkCard />}
            {selectComponent === 'skills' && <GlassSkillCard />}
            {selectComponent === 'career' && <GlassCareerCard />}
            {selectComponent === 'projects' && <GlassProjectCard />}
            </GlassCard>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const Overlay = forwardRef(({scroll,setprogress,selectComponent, setSelectedComponent}, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      // caption.current.innerText = scroll.current.toFixed(2)
      setprogress(scroll.current.toFixed(2)*100)
    }}
    className="scroll">
    <div style={{ height: "200vh"}}>
        {selectComponent==='overlay'?
          <div className="dot">
          <h1>PORTFOLIO</h1>
          <div >Welcome to Soomin's Portfolio Website. This Website was Built with REACT + Three + Fiber. Feel free to look around. </div>
          </div>
          :  <CustomDialog selectComponent={selectComponent} setSelectedComponent={setSelectedComponent}/>}
      
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        {selectComponent === 'overlay' ?
          <>
            <h1>ABOUT ME</h1>
            I love the scent of morning coffee and Burning GPU. <br /> Right now, I'm working as FullStack Programmer in Yura.
          </> :
          null
        }
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        {selectComponent === 'overlay' ?
          <>
            <h1>SKILLS</h1>
            The skills that I have. The major skill is React.js and javascript. But I also can do the other various things like server or Database too.
          </> :null
        }
        
       
        </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        {selectComponent === 'overlay' ?
          <>
            <h1>CAREER</h1>
       I really like writting. I won the Writting competition and have chance to publish my own Book! 
          </> :null
        }
        
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        {selectComponent === 'overlay' ?
          <>
           <h1>PROJECTS</h1>
        I Did a lot of projects. With Team or without team. I prefer to do my own work, But Teamwork is always important.
          </> :null
        }
        
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>ARCHIVING</h1>
       I like writting and also drawing. I draw a lot of arts and make a lot of models. You can check my Instagram :)
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>GITHUB</h1>
        Living as a Programmer is like living in a dilema of Why it works and why it doesn't work.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>EMAIL</h1>
        Are you Interested in my works? Have any questions? <br /> Feel free to contact me!
      </div>
    </div>
  </div>
)
);

export default Overlay
