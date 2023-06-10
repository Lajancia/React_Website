import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Html, useProgress } from "@react-three/drei"
import Model from "../components/Scroll_Model.js"
import Overlay from "../components/Overlay.js"
import "./Landing.css"
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }

export default function Landing() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );




  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  const styles = {
    page: {
      backgroundColor: '#f7f7f7',
      height: '100vh',
    }
  }
  return (
    <>
      <Canvas shadows eventSource={document.getElementById("root")}  style={styles.page}  eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model scroll={scroll} style={styles.page} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
     
    </>
  )
}
