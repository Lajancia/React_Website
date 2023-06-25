import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader,useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { easing } from 'maath'
import BasicGrid from '../layouts/Home'
export default function Model() {
  const gltf = useLoader(GLTFLoader, '/ROOM2.gltf')
  return (
    <>
    <Canvas shadows style={{ position: "absolute",width: "100vw", height: "100vh"}} camera={{ position: [8, 1, 8], fov:60 }} >
       <hemisphereLight castShadow intensity={0.15} groundColor="white" />
       <spotLight  position={[20, 20, 20]} angle={0.12} penumbra={1.5} intensity={0.4} castShadow shadow-mapSize={1024} color={'#FEFCF3'}/>
     <color attach="background" args={['#FEFCF3']} />
     <group position={[-0, -1, 0]}>
        <mesh receiveShadow >
            <primitive
            object={gltf.scene}
            position={[0, 1.7, 0]}
            />
        </mesh>
        {/* Auto-instanced sketchfab model */}
        <pointLight distance={2} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
      </group>
      
     <OrbitControls target={[0, 1, 0]} />
    
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows /> 
    </Canvas>
    <div style={{position: "absolute",display: "block", alignContent:"left"}} alignItems="left">
      <BasicGrid/>
    </div>
    </>
    
  )
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 2, (1 - state.pointer.y) / 2, 5.5], 0.5, delta)
    state.camera.lookAt(-1, -1, -5)
  })
}
