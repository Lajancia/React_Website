import React, { forwardRef } from "react"
import Button from '@mui/material/Button';

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    class="scroll">
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>PORTFOLIO</h1>
        <div >Welcome to Soomin's Portfolio Website. This Webdsite was Built with REACT + Three + Fiber. I'm trying to learn how to use those marvelous tools. Feel free to look around. </div>
      </div>
      
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>WORK</h1>
        I love the scent of morning coffee and Burning CPU. Right now, I'm working as FullStack Programmer. Although I'm junior developer, I always try to be better than yesterday :)
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>EDUCATION</h1>
        Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>PUBLISHING</h1>
        A rocket (from Italian: rocchetto, lit. 'bobbin/spool')[nb 1][1] is a projectile that spacecraft, aircraft or other vehicle use to obtain thrust from a
        rocket engine.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>PROJECTS</h1>A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a rotary mechanical device that extracts energy
        from a fluid flow and converts it into useful work.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>GALLERY</h1>A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which to place things.[1][2]
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>CODING</h1>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>EMAIL</h1>
        Are you Interested of my works? Have any questions? <br/> Feel free to contact me!
      </div>
    </div>
    <span class="caption" ref={caption}>
      0.00
    </span>
  </div>
))

export default Overlay
