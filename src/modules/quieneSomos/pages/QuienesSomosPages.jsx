import { AppLayout } from "../../../layouts/AppLayout"
import bgStars from "../assets/stars-bg.webp"
import bgCreativa from "../assets/carnets/bgTeamWork.png"
import bgTwist from "../assets/background/psycoTwister.svg"
import jump from "../assets/background/jump.png"
import { motion } from "framer-motion"

import '../assets/css/styleQuienesSomos.css'
import { useEffect, useRef, useState } from "react"

// Time text control 
const controlTime = 6
let textTimes = controlTime
let textBg = []
while (textTimes >= 0) {
  textBg.push({ title: 'SOBRE NOSOTROS' })
  textTimes = --textTimes
}

export const QuienesSomosPages = () => {
  const [isOpen, setOpen] = useState(false)
  const [textAnimate, setTextAnimate] = useState(0)
  const ref = useRef(null);

  useEffect(() => {
    ref.current.children[textAnimate].style.color = 'rgb(150 101 253 / 80%)'
  }, [textAnimate])

  const runTextAnimate = () => {
    ref.current.children[textAnimate].style.color = 'transparent'
    if (textAnimate < controlTime) {
      setTextAnimate(textAnimate + 1)
    } else {
      setTextAnimate(0)
    }
  }
  setTimeout(runTextAnimate, 500);




  return (
    <AppLayout>
      <div style={{ height: '400vh', width: '100vw', overflowX: 'hidden' }}>

        <motion.img initial={{x:0, opacity:0, rotate:0}} animate={{x:'calc( 100vw - 30em - 29em)', opacity:1, rotate:10}} 
        transition={{duration:1, delay:0.5, rotate:{duration:5, repeatType: "reverse", repeat: Infinity}}}
        src={jump} alt="jump" style={{width:'30em', height:'45em' ,position: 'fixed', top: 'calc( 50% - 22em )',  zIndex: 1}} />

        <div className="background" style={{ Height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
          <img src={bgCreativa} alt="bgCreativa" style={{ height: '100vh', width: window.screen.width > 900 ? '29em' : '27em', position: 'absolute', top: 0, left: window.screen.width > 900 ? "0em" : "-14em", zIndex: 1, mixBlendMode: 'multiply' }} />

          <motion.div onClick={() => setOpen(!isOpen)} layout transition={{ duration: 0.7 }}
            style={{
              height: '100vh', width: `calc(100vw - 29em)`, position: 'absolute', top: 0, right: isOpen ? `calc(-1 * (100vw - 29em))` : 0,
              zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'
            }}>
            <motion.img animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              src={bgTwist} alt="twister" style={{ height: '200%' }} />
          </motion.div>

          <div ref={ref} className="staggertext" style={{
            height: '100vh', width: `calc(100vw - 29em)`, position: 'absolute', top: 0, right: 0,
            zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflow: 'hidden'
          }}>
            {
              textBg.map((e, i) => <p key={i} style={{
                margin: '0px', ontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: '7em',
                lineHeight: '1em', WebkitTextStroke: 'rgb(150 101 253 / 60%) 2px', color: 'transparent', userSelect:'none'
              }}>{e.title} </p>)
            }
          </div>

          <img style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.2 }} src={bgStars} alt="Fondo estrellas" />
        </div>

      </div>
    </AppLayout>
  )
}