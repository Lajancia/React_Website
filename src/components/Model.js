import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader,useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { easing } from 'maath'

export default function Model() {
  const gltf = useLoader(GLTFLoader, '/portfolio.gltf')
  return (
    <>
       <Canvas shadows style={{ position: "absolute",width: "100vw", height: "100vh"}} camera={{  position: [6, 1, 6], fov:40  }} >
      <color attach="background" args={['white']} />
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight position={[10, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={2048} />
     <group position={[-0, -2, 0]}>
        <mesh receiveShadow >
            <primitive
            object={gltf.scene}
            position={[1, 2, 0]}
            rotation={[Math.PI / 1, 5.5, 3.1]}
            />
        </mesh>
      
        {/* Auto-instanced sketchfab model */}
        {/* <pointLight distance={2} intensity={1} position={[-0.15, 0.7, 0]} color="orange" /> */}
      </group>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={0.1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#ffffff"
            metalness={0.8}
          />
        </mesh>
      <CameraRig />
    
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows /> 
    </Canvas>
 
    </>
    
  )
}
function Bun(props) {
    const { nodes } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/bunny/model.gltf')
    return (
      <mesh receiveShadow castShadow geometry={nodes.bunny.geometry} {...props}>
        <meshStandardMaterial color="#222" roughness={0.5} />
      </mesh>
    )
  }
function CameraRig() {
    useFrame((state, delta) => {
      easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 2, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
      state.camera.lookAt(4, 3, -5)
    })
  }
