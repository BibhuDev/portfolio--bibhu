import React from 'react'
import './Contact.css'
import con from "../../assets/contact.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Contact() {

    useGSAP(()=>{
      gsap.from(".leftcontact", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger:{
          trigger: ".leftcontact",
          scroll: "body",
          scrub: 2,
          start: "top 50%",
          end: "top 30%"
        }
      })

      gsap.from(".rightcontact", {
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger:{
          trigger: ".rightcontact",
          scroll: "body",
          scrub: 2,
          start: "top 50%",
          end: "top 30%"
        }
      })
    })

  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={con} alt="" />
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/mwvgbrbz" method='POST'>
                <input name="Username" type="text" placeholder='Name'/>
                <input name="Email" type="email" placeholder='Email'/>
                <textarea name="Message" id="textarea" placeholder='Message me'></textarea>
                <input type='submit' id='btn' value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default Contact