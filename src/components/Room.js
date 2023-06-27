import React, { useRef, useState,Suspense,useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF,SoftShadows,Reflector,Html, useProgress } from '@react-three/drei'
import { height } from '@mui/system'
import { useControls } from "leva"
import Button from '@mui/material/Button';
import './index.css'
import { useNavigate,useLocation  } from 'react-router-dom';
// import Button from '@mui/material/Button'


const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white', borderColor: 'white' 
  }
}

function Model(props) {
  const group = useRef()
  const { scene } = useGLTF('/ROOM2.gltf')
  return <primitive ref={group} object={scene} {...props} />
}

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }
  

function Room() {
  const location = useLocation();
    useEffect(() => {
        document.body.style.cursor = 'auto';
      }, [location]);
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/');
    };
  
    // const { enabled, ...config } = useControls({
    //     enabled: true,
    //     size: { value: 25, min: 0, max: 100 },
    //     focus: { value: 0, min: 0, max: 2 },
    //     samples: { value: 10, min: 1, max: 20, step: 1 }
    //   })
    const [rotation, setRotation] = useState([0, 0, 0])

    const handleMouseMove = event => {
      const { clientX } = event
      const windowWidth = window.innerWidth
      const rotationValue = (clientX / windowWidth - 0.5) * 2
      setRotation([0, rotationValue,0 ])
    }
    const controls = useRef()

    useEffect(() => {
      if (controls.current) {
        controls.current.minDistance = 5
        controls.current.maxDistance = 10
      }
      console.log(controls.current)
    }, [])
  return (
    <>
        
    <Canvas shadows camera={{ position: [5, 4.5, 5], fov: 60 }} style={{height:"100vh",backgroundColor: '#171918',}}>
    {/* {enabled && <SoftShadows {...config} />} */}
    <fog attach="fog" args={["#555959", 0,20]} />

    <directionalLight castShadow position={[2.5, 5, 5]} intensity={2} shadow-mapSize={1024}>

    </directionalLight>
    <pointLight position={[-30, 0, -30]} color="white" intensity={0.5} />
    <spotLight
      position={[5, 10, 5]}
      angle={0.3}
      penumbra={1}
      intensity={1.2}
      color={'orange'}
      castShadow
    />
    {/* <pointLight position={[0, -10, 0]} intensity={1} /> */}
    <group position={[0, -3.5, 0]}>
    <Suspense fallback={<Loader />}>
    <Model receiveShadow  position={[0, 4, 0]} rotation={rotation} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 2.3, 0]} receiveShadow>
      <Reflector
              resolution={1024}
              blur={[80, 50]}
              mirror={0.8}
              mixBlur={1}
              mixStrength={0.8}
              depthScale={2}
              minDepthThreshold={0.7}
              maxDepthThreshold={1}
              args={[100, 100]}
              color="#555959"
              metalness={1}
              roughness={0.2}
            />
      </mesh>
      
      </Suspense>
    </group>
   
    <OrbitControls
    ref={controls}
    zoomSpeed={0.25}
    minZoom={40}
    maxZoom={140}
    enablePan={false}
    dampingFactor={0.05}
    minPolarAngle={Math.PI / 3}
    maxPolarAngle={Math.PI / 3}
    />
    
  </Canvas>

  <div style={{ textAlign: 'center' }}>
        <Button
      variant="outlined"
      onClick={handleClick}
      style={styles.button}
    >
      Go Back Home
    </Button>
    </div>


 
  </>
  )
}

export default Room
