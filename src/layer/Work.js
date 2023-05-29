import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Html, useProgress } from "@react-three/drei"
import {Work,Work2,Work3} from "../components/Work_Career.js"

import Grid from '@mui/material/Grid';
// import "./Landing.css"


export default function Landing() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  const styles = {
    page: {
        backgroundColor: '#f7f7f7',
      height: '100vh',
      // width: '140vw',
      // marginLeft:'10vw'

    }
  }
  return (
    <>
    
      <Work/>
      <Work2/>
      <Work3/>

 
   
    </>
  )
}
