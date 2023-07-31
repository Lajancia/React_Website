import React, { Suspense, useRef,useState, useEffect  } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Html,useProgress } from "@react-three/drei"
import Model from "../components/Scroll_Model.js"
import Overlay from "../components/Overlay.js"
import { TypeAnimation } from 'react-type-animation';
import "./Landing.css"
import GlassWorkCard from '../components/Overlay/About'
import LinearProgress from '@mui/material/LinearProgress';

function Loader({ show, setShow }) {
  const { progress } = useProgress()
  // console.log(progress)
  useEffect(() => {
    // 1초 후에 Loader 컴포넌트를 숨깁니다.
   if(progress===100){
    setTimeout(() => {
        setShow(false);
      }, 5000);
    
   }
  }, [progress])

  return (
    <div
      style={{
        // opacity: show ? 1 : 0,
        // transition: "opacity 5s",
        background: "white",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hello World',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Hello Visitor',
        1000,
        'Hello Friend',
        1000,
        'Hello Everyone',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
     
    </div>
  )
}

export default function Landing({render,setRender}) {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [progress, setProgress] = useState(0);
  const [selectComponent,setSelectedComponent]=useState('overlay')
  // const [progress, setProgress] = useState(0);
  const overlay = useRef()
  const scroll = useRef(0)
  const styles = {
    page: {
      backgroundColor: '#101010',
      height: '100vh',
    }
  }
  
  return (
    render ? 
    <Loader show={render} setShow={setRender} />:
      <>
       <Suspense fallback={<Loader />}>
        <ScrollProgressBar progress={progress}/>
      <Canvas shadows eventSource={document.getElementById("root")} style={styles.page} eventPrefix="client">
        <ambientLight intensity={3} />
        <Model scroll={scroll} selectComponent={selectComponent} setSelectedComponent={setSelectedComponent} style={styles.page} />
        {/* <Environment preset="city" /> */}
          </Canvas>
           <Overlay ref={overlay} scroll={scroll} setprogress={setProgress} selectComponent={selectComponent} setSelectedComponent={setSelectedComponent}/>
        
    </Suspense>
    </>
  )
}

function ScrollProgressBar({progress}) {

  return <LinearProgress variant="determinate" value={progress}  sx={{
    '&.MuiLinearProgress-root': { backgroundColor: 'black' },
    '& .MuiLinearProgress-bar': { backgroundColor: '#f8b500' },
  }}/>;
}