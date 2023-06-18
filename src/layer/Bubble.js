import * as THREE from 'three'
import React, { useRef, useMemo, useState, Suspense } from 'react'
import { Canvas, useFrame,useLoader} from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
function Swarm({ count, ...props }) {
  const mesh = useRef()
  const [dummy] = useState(() => new THREE.Object3D())

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -40 + Math.random() * 80
      const yFactor = -20 + Math.random() * 40
      const zFactor = -20 + Math.random() * 40
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame((state, delta) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.max(1.5, Math.cos(t) * 5)
      particle.mx += (state.mouse.x * state.viewport.width - particle.mx) * 0.02
      particle.my += (state.mouse.y * state.viewport.height - particle.my) * 0.02
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]} castShadow receiveShadow {...props}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial roughness={0.3} color="#ffffff" />
    </instancedMesh>
  )
}

export default function Bubble() {
    
  const gltf = useLoader(GLTFLoader, '/portfolio.gltf')
  return (
    <>
      <Canvas shadows  style={{ position: "absolute",width: "98.8vw", height: "100vh"}} gl={{ alpha: false, antialias: false }} camera={{ fov: 30, position: [0, 10, 100], near: 10, far: 150 }}>
      <color attach="background" args={['#efefef']} />
      <mesh receiveShadow >
            <primitive
            object={gltf.scene}
            scale={[10,10,10]}
            position={[-3, -7, 10]}
            rotation={[Math.PI / 3, 4.7, 1]}
            />
        </mesh>
      {/* <fog attach="fog" args={['blue', 60, 100]} /> */}
      <fog attach="fog" args={['black', 100, 100]} />
      {/* <ambientLight intensity={1.5} /> */}
      <pointLight position={[100, 10, -50]} intensity={20} castShadow />
      {/* <pointLight position={[-100, -100, -100]} intensity={10} color="white" /> */}
      <Swarm count={150} position={[0, 10, 0]} />
      {/* <ContactShadows rotation={[Math.PI / 2, 0, 0]} position={[0, -30, 0]} opacity={0.6} width={130} height={130} blur={1} far={40} /> */}
      <EffectComposer multisampling={0}>
        <SSAO samples={31} radius={10} intensity={30} luminanceInfluence={0.1} color="white" />
      </EffectComposer>
      <Suspense fallback={null}>
        {/* <Environment preset="sunset" /> */}
      </Suspense>
    </Canvas>
    <Box minHeight="27vh">
      </Box>
            <Box  display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="48vh">
                <Grid container >
                    <Grid item xs={6} mr={8} pr={6}>
                        {/* <h3 align="right"></h3> */}
                        <Typography id="Typography" variant="h4" gutterBottom align="right">
                            <a href="/#" class="effect-underline">RESUME</a>
                        </Typography>
                         <Typography id="Typography" variant="h4" gutterBottom align="right">
                            <a href="/#" class="effect-underline">GALLERY</a>
                        </Typography>
                         <Typography id="Typography" variant="h4" gutterBottom align="right">
                            <a href="/#" class="effect-underline">PROJECTS</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={12}>
                        
                    </Grid>
                    
                </Grid>  
            </Box>
            <Box minHeight="27vh">
      </Box>
    </>
  
  )
}
