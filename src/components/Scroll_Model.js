import { useNavigate  } from 'react-router-dom';
import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const color = new THREE.Color()

export default function Model({ scroll, selectComponent, setSelectedComponent, ...props }) {
  const navigate = useNavigate();
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/scroll.glb")
  const { actions } = useAnimations(animations, group)
  const [hovered, set] = useState()
  const [active, setActive] = useState(false);

  const myMesh = React.useRef();
  const extras = { receiveShadow: true, castShadow: true, "material-envMapIntensity": 0.2 }

  const handleClickOpen = (component) => {
    console.log(component)
    setSelectedComponent(component);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:kie6974@gmail.com`;
  }
  const handleInstaClick = () => {
    // window.location.href = ;
    window.open(`https://instagram.com/lajancia/`, '_blank');
  }
  const handleGitClick = () => {
    // window.location.href = ;
    window.open(`https://github.com/Lajancia`, '_blank');
  }
  const handleBookClick = () => {
    window.open(`https://www.yes24.com/Product/Goods/96881583`, '_blank');
    // window.location.href = ;
  }
  const handleCoffeeClick = () => navigate('/work');

  const handleHatClick = () => navigate('/education');

  const handleProjectClick = () => navigate('/project1');

  useEffect(() => void (actions["CameraAction.005"].play().paused = true), [])
  useEffect(() => {
    if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])
  useFrame((state) => {
    actions["CameraAction.005"].time = THREE.MathUtils.lerp(actions["CameraAction.005"].time, actions["CameraAction.005"].getClip().duration * scroll.current, 0.05)
    group.current.children[0].children.forEach((child, index) => {
      child.material.color.lerp(color.set(hovered === child.name ? "#F5564E" : "#101010"), hovered ? 0.3:0.3)
      const et = state.clock.elapsedTime
    })
  })

  return (
    <group ref={group} {...props} dispose={null} style={{ height: "100vh" }}>
      <group
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
        onPointerOut={(e) => (e.stopPropagation(), set(null))}
        position={[0.06, 4.04, 0.35]}
        scale={[0.25, 0.25, 0.25]}>
        <mesh name="hat" geometry={nodes.hat.geometry} material={materials.hat} {...extras}  onClick={() =>{handleClickOpen('skills')} }
      ref={myMesh} />
        <mesh name="Notebook" geometry={nodes.Notebook.geometry} material={materials.M_Notebook} {...extras} onClick={() =>{ handleGitClick()} }/>
        <mesh name="Book" geometry={nodes.Book.geometry} material={materials.M_Book} {...extras} onClick={() =>{ handleClickOpen('career')}}/>
        <mesh name="Text" geometry={nodes.Text.geometry} material={materials.projects} {...extras} onClick={() =>{ handleClickOpen('projects')} }/>
        <mesh name="Picture" geometry={nodes.picture.geometry} material={materials.picture} {...extras} onClick={() =>{ handleInstaClick()} }/>
        <mesh name="Coffee" geometry={nodes.Coffee.geometry} material={materials.M_Coffee} {...extras} onClick={() =>{ handleClickOpen('coffee')} }/>
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
            intensity={2.5}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  )
}

useGLTF.preload("/scroll.glb")
