import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Html, useProgress } from "@react-three/drei"
import Model from "../components/Scroll_Model.js"
import Overlay from "../components/Overlay.js"
import "./Landing.css"

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }

export default function Landing() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  const styles = {
    page: {
        // backgroundColor: '#efefef',
        height: '100vh',

    }
}
  return (
    <>
      <Canvas shadows eventSource={document.getElementById("root")}  style={styles.page}  eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model scroll={scroll} style={styles.page} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  )
}
