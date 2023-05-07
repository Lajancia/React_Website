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
        I love the scent of morning coffee and Burning GPU. Right now, I'm working as FullStack Programmer. Although I'm junior developer, I always try to be better than yesterday :)
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>EDUCATION</h1>
        19 Years and Plus of my Education. Graduating the University and study various languages and so on. Interested? Sorry. But this page is still on building. I promise It will be done in short day....or month!
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>PUBLISHING</h1>
        Well...I really like writting. During the University Student, I won the Writting competition and have chance to publish my own Book! Of course, I draw all the illustrations too. Wanna read my Story? Sorry. Also this page is on making xp
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>PROJECTS</h1>
        I Did a lot of projects. With Team or without team. I prefer to do my own work, But Teamwork is always important. I still dont know how to show my projects. So i'm still thinking how to make this page...
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>GALLERY</h1>
        As I said, I like writting and also drawing. I draw a lot of arts and make a lot of models. I truly want to share my masterpiece, but right now, I have too many things to make...sadly. Instead, You can check my Instagram :)
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>CODING</h1>
        Living as a Programmer is like living in a dilema of Why it works and why it doesn't work. But my true friend stackOverflow helps a lot. Maybe I'm better than yesterday.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>EMAIL</h1>
        Are you Interested of my works? Have any questions? <br /> Feel free to contact me!
      </div>
    </div>
    <span class="caption" ref={caption}>
      0.00
    </span>
  </div>
));

export default Overlay
