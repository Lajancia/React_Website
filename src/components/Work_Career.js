import { Suspense,  useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {useProgress, Html,useGLTF} from '@react-three/drei'
import { Overlay, Overlay2, Overlay3 } from "../components/Work_Overlay.js"
import * as THREE from 'three';

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
  const Cube = useRef();
  const work= useGLTF( '/work.glb');

   const glassMaterial = new THREE.MeshPhysicalMaterial({
   transparent: true,
  opacity: 0.5,
  color: 'white',
  roughness: 0,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  envMapIntensity: 21
   });
  
  useFrame(() => {Cube.current.rotation.y += 0.01});
  return (
    
    <primitive
      ref={Cube}
      material={glassMaterial}
      position={[-5, 0, -50]}
      scale={[5, 5, 5]}
      object={work.nodes.Cube}
    />
          )
  }

function Apart() {
  const Torus = useRef();
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
  
  useFrame(() => {Torus.current.rotation.z += 0.01});
  return (
    
    <primitive
      ref={Torus}
      material={glassMaterial}
      position={[-3, 0, -30]}
      scale={[7, 7, 7]}
      object={work.nodes.Torus}
    />
  )
}

function Desk() {
  const Icosphere = useRef();
  const work= useGLTF( '/work.glb');
  const glassMaterial = new THREE.MeshPhysicalMaterial({
  transparent: true,
  opacity:1,
  color: 'white',
  roughness: 0,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  envMapIntensity: 21
   });
  
  useFrame(() => {Icosphere.current.rotation.y -= 0.01});
  return (
    
    <primitive
      ref={Icosphere}
      material={glassMaterial}
      position={[-3, 0, -30]}
      scale={[3, 3, 3]}
      object={work.nodes.Icosphere}
    />
  )
}

function Work() {
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
          <directionalLight castShadow intensity={4} position={[15, 10, 30]} shadow-mapSize={[1024, 1024]} color={'#93A8BD'}>
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
  return (
    <>
    <div style={{ position: "relative" }}>
      <Canvas dpr={[1, 1]} shadows camera={{ position: [5, 0, 80], fov: 25 }} style={styles.page3}>
        <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]} color={'#93A8BD'}>
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