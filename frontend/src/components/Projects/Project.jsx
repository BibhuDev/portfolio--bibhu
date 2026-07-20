import React from 'react'
import Card from '../Card/Card'
import './Project.css'
// import ai from "../../assets/ai.png"
// import ms from "../../assets/ms.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Project() {

  useGSAP(()=>{
      gsap.from("#para", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger:{
          trigger: "#para",
          scroll: "body",
          scrub: 2,
          start: "top 80%",
          end: "top 30%"
        }
      })

      gsap.from(".slider", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger:{
          trigger: ".slider",
          scroll: "body",
          scrub: 2,
          start: "top 80%",
          end: "top 30%"
        }
      })
    })
    
  return (
    <div id="projects">
        <h1 id='para'>FEATURED PROJECTS</h1>
        <div className="slider">
            <Card title="MULTI AGENT AI ASSISTANCE"/>
            <Card title="EVENT BOOKING MICROSERCIVES"/>
            <Card title="AI CAR DAMAGE DETECTION"/>
            <Card title="NEAR-EARTH OBJECT TRACKER"/>
        </div>
    </div>
  )
}

export default Project