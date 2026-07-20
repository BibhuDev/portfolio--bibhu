import React from 'react'
import "./Home.css"
import img from "../../assets/coding.jpeg"
import { TypeAnimation } from "react-type-animation"
import {useGSAP} from "@gsap/react"
import { gsap } from 'gsap'

function Home() {

  useGSAP(()=>{
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      duration: 0.7,
      opacity: 0
    })
    tl1.from(".line2", {
      y: 80,
      duration: 0.7,
      opacity: 0
    })
    tl1.from(".line3", {
      y: 80,
      duration: 0.7,
      opacity: 0
    })
    gsap.from(".righthome img",{
      x: 200,
      duration: 0.7,
      opacity: 0
    })
  })

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">BIBHUDUTTA PANDA</div>
          <div className="line3">
            <TypeAnimation
              sequence={[
                "BACKEND DEVELOPER",
                1500,
                "AI DEVELOPER",
                1500,
                "SOFTWARE DEVELOPER",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Home