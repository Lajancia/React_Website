import React,{useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three'
import { useFrame, useThree } from '@react-three/fiber'

const diamondMaterial = new MeshPhysicalMaterial({
  color: 0x000000,
  reflectivity: 1,
  clearcoat: 2,
  transmission: 1,
})

function Model(props) {
  const { nodes, materials } = useGLTF('/education.glb')
  return (
    <group scale={[1,2.4,1]} position={[0,5,5]} {...props} dispose={null}>
      <mesh castShadow material={diamondMaterial} geometry={nodes.Vue.geometry} />
      <mesh castShadow material={diamondMaterial} geometry={nodes.React.geometry} />
      <mesh castShadow material={diamondMaterial} geometry={nodes.Linux.geometry} />
      <mesh castShadow material={diamondMaterial} geometry={nodes.Git.geometry} />
      <mesh castShadow material={diamondMaterial} geometry={nodes.Java.geometry} />
      <mesh castShadow material={diamondMaterial} geometry={nodes.Javascript.geometry} />
      <mesh castShadow material={diamondMaterial} geometry={nodes.Mariadb.geometry} />
      <mesh castShadow material={diamondMaterial} geometry={nodes.Blender.geometry} />
    </group>
  )
}

function Floor() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color={'black'} clearcoat={1} clearcoatRoughness={0.3} />
    </mesh>
  )
}
function MovingLight() {
  const light = useRef()
  const { mouse } = useThree()
  useFrame(() => {
    light.current.position.x = mouse.x * 20
    light.current.position.z = mouse.y * -20
  })
  return (
    <spotLight
      ref={light}
      position={[0, 10, 0]}
      angle={0.3}
      penumbra={1}
      intensity={5}
      color={'#93A8BD'}
      castShadow
    />
  )
}

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 10, 0] }}>
      <ambientLight intensity={0.3} />
      <MovingLight />
      <Model position={[0, -1, 0]} />
      <Floor />
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  )
}