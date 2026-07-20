import React from 'react'
import Card from '../Card/Card'
import './Project.css'
// import ai from "../../assets/ai.png"
// import ms from "../../assets/ms.png"

function Project() {
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