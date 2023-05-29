import { Suspense, useMemo, useRef, forwardRef,useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {AccumulativeShadows, RandomizedLight,useGLTF, useScroll, ScrollControls, Environment, Merged, Text, MeshReflectorMaterial } from '@react-three/drei'
import { Color } from 'three';
import {Overlay,Overlay2,Overlay3} from "../components/Work_Overlay.js"
import './index.css';
import Grid from '@mui/material/Grid';

function Earth() {
  const earth = useRef();
  const work= useGLTF( '/work.glb');

  useFrame(() => {earth.current.rotation.y += 0.01});
  return <primitive 
          ref={earth}
          color={'#ff9a3c'} 
          position={[0,0,-50]} 
          scale={[5,5,5]} 
          object={work.nodes.earth} />
}

function Apart() {
  const apart = useRef();
  const work= useGLTF( '/work.glb');

  useFrame(() => {apart.current.rotation.y += 0.005});

  return <primitive 
          ref={apart} 
          position={[-5,-8,-5]} 
          scale={[1,1,1]} 
          object={work.nodes.apartment} />
}

function Desk() {
  const desk = useRef();
  const work= useGLTF( '/work.glb');
  // useFrame(() => (earth.current.position.x = scroll.offset * -50))

  useFrame(() => {desk.current.rotation.y += 0.01});
  return <primitive 
          ref={desk} 
          position={[0,-10,0]} 
          scale={[2,2.5,2]} 
          object={work.nodes.computer} />
}

function Work() {

    const styles = {
        page: {
            backgroundColor: '#93A8BD',
          height: '100vh',
          // marginLeft:'10vw'
    
        }
    }
    return (
      <>
       <Grid container>
        <Grid item xs={4}>
        <Canvas dpr={[1, 1]} shadows camera={{ position: [5, 0, 80], fov: 25 }} style={styles.page}>
          <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
            <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
          </directionalLight> 
          <Earth />
          <Environment preset="sunset" background blur={0.5} />
        </Canvas>
        </Grid>
        <Grid item xs={8}>
        <Overlay />
        </Grid>
        </Grid>
       
      
      </>
    )
  }
  
function Work2() {

  const styles = {
      page: {
          backgroundColor: '#93A8BD',
        height: '100vh',
        // marginLeft:'10vw'
  
      }
  }
  return (
    <>
     <Grid container>
      <Grid item xs={7}>
      <Overlay2 />
      </Grid>
      <Grid item xs={5}>
      <Canvas dpr={[1, 1]} shadows camera={{ position: [5, 0, 80], fov: 25 }} style={styles.page}>
        <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
          <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight> 
        <Desk />
        <Environment preset="sunset" background blur={0.5} />
      </Canvas>
      </Grid>
      </Grid>
     
    
    </>
  )
}
function Work3() {

  const styles = {
      page: {
          backgroundColor: '#93A8BD',
        height: '100vh',
        // marginLeft:'10vw'
  
      }
  }
  return (
    <>
     <Grid container>
      <Grid item xs={6}>
      <Canvas dpr={[1, 1]} shadows camera={{ position: [5, 0, 80], fov: 25 }} style={styles.page}>
        <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
          <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight> 
        <Apart />
        <Environment preset="sunset" background blur={0.5} />
      </Canvas>
      </Grid>
      <Grid item xs={6}>
      <Overlay3 />
      </Grid>
      </Grid>
     
    
    </>
  )
}
export {Work,Work2,Work3}