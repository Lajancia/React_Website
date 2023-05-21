import { Suspense, useMemo, useRef, forwardRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useScroll, ScrollControls, Environment, Merged, Text, MeshReflectorMaterial } from '@react-three/drei'

const Model = () =>{
    const ref = useRef()
    const scroll = useScroll()
    const work= useGLTF( '/work.glb');
    const meshes = useMemo(() => ({ Apart: work.nodes.apartment, Street1: work.nodes.streetlight}), [work])
    useFrame(() => (ref.current.position.z = scroll.offset * 120))
 
    return (
        <Merged castShadow receiveShadow meshes={meshes}>
         
            
        {(models) => (
            <group ref={ref}>
              
                <models.Apart 
                    color={"#93A8BD"} 
                    position={[2, 1.5, 0.7]} 
                    scale={[1,3,1]}
                    rotation={[Math.PI / 2.9, 4.7, 1.1]}
                />
                <models.Street1 
                    color={"#93A8BD"} 
                    position={[-2,-1.4, -20]} 
                    scale={[0.05,0.05,0.05]}
                    rotation={[Math.PI / 2.85, 4.65, 1.1]}
                />
              
            </group>
        )}
        </Merged>
    )
}

export default function Work() {
    const styles = {
        page: {
            backgroundColor: '#f7f7f7',
          height: '100vh',
          // width: '140vw',
          // marginLeft:'10vw'
    
        }
    }
    return (
      <Canvas dpr={[1, 1.5]} shadows camera={{ position: [-15, 15, 18], fov: 35 }} gl={{ alpha: false }} style={styles.page}>
        <fog attach="fog" args={['#ffffff', 30, 40]} />
        <color attach="background" args={['#ffffff']} />
        <ambientLight intensity={0.25} />
        <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
          <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight>
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <Model />
          </ScrollControls>
          <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[200, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={5}
              depthScale={1}
              minDepthThreshold={0.85}
              color="#ff9a3c"
              metalness={0.2}
              roughness={1}
            />
          </mesh>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    )
  }
  