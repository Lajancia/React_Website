import React, { forwardRef } from "react"
import { Button, Dialog,DialogContent } from '@mui/material';
import { makeStyles } from '@mui/styles'
import {Glasscard,GlassDisplayCard,GlassSkillCard,GlassWorkCard} from './Glasscard'

const useStyles = makeStyles({
  paper: {
    backgroundColor:'transparent'
  },
});

const CustomDialog = ({open,setOpen,title,word}) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
        BackdropProps={{ invisible: true }}
      >
        {/* Your dialog content here */}
        <DialogContent onClick={handleClose} style={{ overflow: 'scroll' }}>
        <GlassWorkCard/>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const CustomDialog2 = ({open,setOpen}) => {
  const classes = useStyles();
  
  // const [open, setOpen] = React.useState(false);
const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
        BackdropProps={{ invisible: true }}
      >
        <DialogContent onClick={handleClose} style={{ overflow: 'scroll' }}>
        <GlassSkillCard/>
        </DialogContent>
        {/* Your dialog content here */}
         
      </Dialog>
    </div>
  );
}

const Overlay = forwardRef(({scroll,setprogress,open, setOpen,open2,setOpen2 }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      // caption.current.innerText = scroll.current.toFixed(2)
      setprogress(scroll.current.toFixed(2)*100)
    }}
    className="scroll">
    <div style={{ height: "200vh" }}>
      <div className="dot">
        {!open && !open2?
          <>
          <h1>PORTFOLIO</h1>
          <div >Welcome to Soomin's Portfolio Website. This Website was Built with REACT + Three + Fiber. Feel free to look around. </div>
          </>
          : null}
        <CustomDialog open={open} setOpen={setOpen}
        title={"Welcome!"}
            word={"This Website is the Second version of personal Website. Previously It was built with Vue.js but now I rebuild this with React.js to give an animation effeciently using 3D Model."}/>
      </div>
      
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
         {!open && !open2 ?
          <>
         <h1>WORK</h1>
        I love the scent of morning coffee and Burning GPU. Right now, I'm working as FullStack Programmer in Yura.
          </>
          : null}
        
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        {!open2 ?
        <>
          <h1>EDUCATION</h1>
        19 Years and Plus of my Education. Graduated the University, studied various languages and so on. 
      </> : null}
        <CustomDialog2 open={open2} setOpen={setOpen2}/>
        </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>PUBLISHING</h1>
       I really like writting. I won the Writting competition and have chance to publish my own Book! 
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>PROJECTS</h1>
        I Did a lot of projects. With Team or without team. I prefer to do my own work, But Teamwork is always important.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>GALLERY</h1>
       I like writting and also drawing. I draw a lot of arts and make a lot of models. You can check my Instagram :)
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>CODING</h1>
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
