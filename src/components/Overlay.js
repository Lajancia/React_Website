import React, { forwardRef } from "react"

const Overlay = forwardRef(({scroll,setprogress }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      // caption.current.innerText = scroll.current.toFixed(2)
      setprogress(scroll.current.toFixed(2)*100)
    }}
    className="scroll">
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>PORTFOLIO</h1>
        <div >Welcome to Soomin's Portfolio Website. This Website was Built with REACT + Three + Fiber. Feel free to look around. </div>
      </div>
      
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>WORK</h1>
        I love the scent of morning coffee and Burning GPU. Right now, I'm working as FullStack Programmer in Yura.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>EDUCATION</h1>
        19 Years and Plus of my Education. Graduated the University, studied various languages and so on. 
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>PUBLISHING</h1>
       I really like writting. I won the Writting competition and have chance to publish my own Book! 
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>PROJECTS</h1>
        I Did a lot of projects. With Team or without team. I prefer to do my own work, But Teamwork is always important.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>GALLERY</h1>
       I like writting and also drawing. I draw a lot of arts and make a lot of models. You can check my Instagram :)
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>CODING</h1>
        Living as a Programmer is like living in a dilema of Why it works and why it doesn't work.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>EMAIL</h1>
        Are you Interested in my works? Have any questions? <br /> Feel free to contact me!
      </div>
    </div>
  </div>
)
);

export default Overlay
