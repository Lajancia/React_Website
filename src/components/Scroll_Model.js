import { useNavigate  } from 'react-router-dom';
import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const color = new THREE.Color()

export default function Model({ scroll, ...props }) {
  const navigate = useNavigate();
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/scroll.glb")
  const { actions } = useAnimations(animations, group)
  const [hovered, set] = useState()
  const [active, setActive] = useState(false);
  const myMesh = React.useRef();
  const extras = { receiveShadow: true, castShadow: true, "material-envMapIntensity": 0.2 }
  const handleEmailClick = () => {
    window.location.href = `mailto:kie6974@gmail.com`;
  }
  const handleInstaClick = () => {
    window.location.href = `https://instagram.com/lajancia/`;
  }
  const handleGitClick = () => {
    window.location.href = `https://github.com/Lajancia`;
  }
  const handleCoffeeClick = () => navigate('/product1');
  useEffect(() => void (actions["CameraAction.005"].play().paused = true), [])
  useEffect(() => {
    if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])
  useFrame((state) => {
    actions["CameraAction.005"].time = THREE.MathUtils.lerp(actions["CameraAction.005"].time, actions["CameraAction.005"].getClip().duration * scroll.current, 0.05)
    group.current.children[0].children.forEach((child, index) => {
      child.material.color.lerp(color.set(hovered === child.name ? "#ff9a3c" : "#93A8BD"), hovered ? 0.1 : 0.05)
      const et = state.clock.elapsedTime
      child.position.y = Math.sin((et + index * 2000) / 2) * 1
      child.rotation.x = Math.sin((et + index * 2000) / 3) / 10
      child.rotation.y = Math.cos((et + index * 2000) / 2) / 10
      child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
    })
  })

  return (
    <group ref={group} {...props} dispose={null} style={{ height: "100vh" }}>
      <group
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
        onPointerOut={(e) => (e.stopPropagation(), set(null))}
        position={[0.06, 4.04, 0.35]}
        scale={[0.25, 0.25, 0.25]}>
        <mesh name="hat" geometry={nodes.hat.geometry} material={materials.hat} {...extras}  onClick={() =>{setActive(!active); console.log('this is headphone')} }
      ref={myMesh} />
        <mesh name="Notebook" geometry={nodes.Notebook.geometry} material={materials.M_Notebook} {...extras} onClick={() =>{ handleGitClick()} }/>
        <mesh name="Book" geometry={nodes.Book.geometry} material={materials.M_Book} {...extras} />
        <mesh name="Text" geometry={nodes.Text.geometry} material={materials.projects} {...extras} />
        <mesh name="Picture" geometry={nodes.picture.geometry} material={materials.picture} {...extras} onClick={() =>{ handleInstaClick()} }/>
        <mesh name="Coffee" geometry={nodes.Coffee.geometry} material={materials.M_Coffee} {...extras} onClick={() =>{ handleCoffeeClick()} }/>
        <mesh name="Contect" geometry={nodes.Contect.geometry} material={materials.M_Contact} v onClick={() =>{ handleEmailClick()} }/>
      </group>
      <group name="Camera" position={[-1.78, 2.04, 23.58]} rotation={[1.62, 0.01, 0.11]}>
        <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} rotation={[-Math.PI / 2, 0, 0]}>
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  )
}

useGLTF.preload("/scroll.glb")
