import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/MERN.png"
import llm from "../../assets/LLM.png"
import dsa from "../../assets/dsa.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(()=>{
      // gsap.from(".circle", {
      //   x: -100,
      //   duration: 1,
      //   opacity: 0,
      //   scrollTrigger:{
      //     trigger: ".circle",
      //     scroll: "body",
      //     scrub: 2,
      //     start: "top 50%",
      //     end: "top 30%"
      //   }
      // })

      // gsap.from(".line", {
      //   x: -100,
      //   duration: 1,
      //   opacity: 0,
      //   scrollTrigger:{
      //     trigger: ".line",
      //     scroll: "body",
      //     scrub: 2,
      //     start: "top 50%",
      //     end: "top 30%"
      //   }
      // })

      gsap.from(".aboutdetails h1", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger:{
          trigger: ".aboutdetails h1",
          scroll: "body",
          scrub: 2,
          start: "top 50%",
          end: "top 30%"
        }
      })

      gsap.from(".aboutdetails ul", {
        y: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger:{
          trigger: ".aboutdetails ul",
          scroll: "body",
          scrub: 2,
          start: "top 50%",
          end: "top 30%"
        }
      })

      gsap.from(".rightabout", {
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger:{
          trigger: ".rightabout",
          scroll: "body",
          scrub: 2,
          start: "top 50%",
          end: "top 30%"
        }
      })
    })

  return (
    <div id="about">
      <div className="leftabout">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>

          <div className="aboutdetails">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li>
                  <span>NAME</span>: Bibhudutta panda
                </li>
                <li>
                  <span>AGE</span>: 20
                </li>
                <li>
                  <span>GENDER</span>: Male
                </li>
                <li>
                  <span>LANGUAGE KNOWN</span>: English, Hindi, Odia
                </li>
              </ul>
            </div>
            <div className="education">
              <h1>Education</h1>
              <ul>
                <li>
                  <span>DEGREE</span>: B-TECH
                </li>
                <li>
                  <span>BRANCH</span>: Computer Science & Engineering
                </li>
                <li>
                  <span>CGPA</span>: 9.25
                </li>
              </ul>
            </div>
            <div className="skills">
              <h1>Skills</h1>
              <ul>
                <li>MERN Developer</li>
                <li>AI/LLM Applications</li>
                <li>Data Structures & Algorithms</li>
              </ul>
            </div>
          </div>
      </div>
      <div className="rightabout">
          <Card title= "MERN DEVELOPER" image={mern}/>
          <Card title= "AI/LLM APPLICATIONS" image={llm}/>
          <Card title= "DSA AND SYSTEM DESIGN" image={dsa}/>
      </div>
    </div>
  )
}

export default About