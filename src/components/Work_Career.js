import { Suspense,  useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {useProgress, Html,useGLTF,Environment} from '@react-three/drei'
import { Overlay, Overlay2, Overlay3 } from "../components/Work_Overlay.js"
import * as THREE from 'three';
import './index.css';
import Grid from '@mui/material/Grid';
import Glasscard from '../components/Glasscard'

 const styles = {
        page: {
            backgroundColor: '#101010',
            background: 'radial-gradient(circle at bottom center, #212121 0%, #101010 80%)',
            height: '100vh',
        },
        page2: {
                  backgroundColor: '#101010',
                  background: 'radial-gradient(circle at bottom center, #212121 0%, #101010 80%)',
                  height: '150vh',
        },
        page3: {
                  backgroundColor: '#101010',
                  background: 'radial-gradient(circle at bottom center, #212121 0%, #101010 80%)',
                  height: '150vh',
              }
   
    }

function Loader() {
  const { progress } = useProgress()
  return <Html center color={'white'}>{progress} % loaded</Html>
}
function Earth() {
  const earth = useRef();
  const work= useGLTF( '/work.glb');

   const glassMaterial = new THREE.MeshPhysicalMaterial({
   transparent: true,
  opacity: 1,
  color: 'white',
  roughness: 0,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  envMapIntensity: 21
   });
  
  useFrame(() => {earth.current.rotation.y += 0.01});
  return (
    
    <primitive
      ref={earth}
      material={glassMaterial}
      position={[0, 0, -50]}
      scale={[5, 5, 5]}
      object={work.nodes.earth}
    />
          )
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
    // const styles = {
    //     page: {
    //         backgroundColor: '#101010',
    //         background: 'radial-gradient(circle at bottom center, #212121 0%, #101010 80%)',
    //         height: '100vh',
    //     }
    // }

    return (
      <>
        
        <div style={{ position: "relative" }}>
            <Canvas dpr={[1, 1]} shadows camera={{ position: [5, 0, 80], fov: 25 }} style={styles.page}>
            <directionalLight castShadow intensity={5} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]} color={'#93A8BD'}>
                <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
            </directionalLight>
            
              <Suspense fallback={<Loader />}>
                <Earth />
               {/* <Environment preset="city" resolution={256} background blur={0.8}/> */}
              </Suspense>
            </Canvas>
            <div style={{ position: "absolute", top: 0, left: 0, width:'100%',color: "white" }}>
              <Overlay/>
            </div>
        </div>
      </>
    )
  }
  
function Work2() {
  
  return (
    <>
      <div style={{ position: "relative" }}>
        <Canvas dpr={[1, 1]} shadows camera={{ position: [5, 0, 80], fov: 25 }} style={styles.page2}>
          <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
            <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
          </directionalLight> 
          <Suspense fallback={<Loader />}>
            <Desk />
            {/* <Environment preset="sunset" background blur={0.5} /> */}
          </Suspense>
        </Canvas>
        <div style={{ position: "absolute", top: 0, left: 0, width:'100%',color: "white" }}>
          <Overlay2/>
        </div>
      </div>
    </>
  )
}

function Work3() {
  // const styles = {
  //     page: {
  //       backgroundColor: '#93A8BD',
  //       height: '200vh',
  //     }
  // }
  return (
    <>
    <div style={{ position: "relative" }}>
      <Canvas dpr={[1, 1]} shadows camera={{ position: [5, 0, 80], fov: 25 }} style={styles.page3}>
        <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
          <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight> 
        <Suspense fallback={<Loader />}>
          <Apart />
          {/* <Environment preset="sunset" background blur={0.5} /> */}
        </Suspense>
      </Canvas>
      <div style={{ position: "absolute", top: 0, left: 0, width:'100%', height:'100%',color: "white" }}>
        <Overlay3/>
      </div>
    </div>
    </>
  )
}

export {Work,Work2,Work3}