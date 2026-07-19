import React, { useRef } from 'react'
import "./Nav.css"
import {Link} from "react-scroll"

function Nav() {

    let menu = useRef();

  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopMenu'>
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={400}><li>Home</li></Link>
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={400}><li>About</li></Link>
            <Link to="projects" activeClass='active' spy={true} smooth={true} duration={400}><li>Projects</li></Link>
            <Link to="contact" activeClass='active' spy={true} smooth={true} duration={400}><li>Contact</li></Link>
        </ul>

        <div className="hamburger" ref={menu} onClick={()=>{
            
        }}>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
        </div>

        <ul className='mobileMenu'>
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={400}><li>Home</li></Link>
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={400}><li>About</li></Link>
            <Link to="projects" activeClass='active' spy={true} smooth={true} duration={400}><li>Projects</li></Link>
            <Link to="contact" activeClass='active' spy={true} smooth={true} duration={400}><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Nav