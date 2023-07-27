import { AppLayout } from "../../../layouts/AppLayout"
import bgStars from "../assets/stars-bg.webp"
import bgCreativa from "../assets/carnets/bgTeamWork.png"
import bgTwist from "../assets/background/psycoTwister.png"
import { motion } from "framer-motion"

import '../assets/css/styleQuienesSomos.css'
import { useState } from "react"

export const QuienesSomosPages = () => {


  const [isOpen, setOpen] = useState(false)
  const textBg = [{ title: 'SOBRE NOSOTROS' }, { title: 'SOBRE NOSOTROS' }, { title: 'SOBRE NOSOTROS' }]

  return (
    <AppLayout>
      <div style={{ height: '400vh', width: '100vw', overflowX: 'hidden' }}>

        <div className="background" style={{ Height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
          <img src={bgCreativa} alt="bgCreativa" style={{ height: '100vh', width: window.screen.width > 900 ? '29em' : '27em', position: 'absolute', top: 0, left: window.screen.width > 900 ? "0em" : "-14em", zIndex: 1, mixBlendMode: 'multiply' }} />

          <motion.div onClick={() => setOpen(!isOpen)} layout transition={{ duration: 0.7 }}
            style={{
              height: '100vh', width: `calc(100vw - 29em)`, position: 'absolute', top: 0, right: isOpen ? `calc(-1 * (100vw - 29em))` : 0,
              zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'
            }}>
            <motion.img animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              src={bgTwist} alt="twister" style={{ height: '180%' }} />
          </motion.div>

          <div className="staggertext" style={{
            height: '100vh', width: `calc(100vw - 29em)`, position: 'absolute', top: 0, right: 0,
            zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflow: 'hidden'
          }}>
            {
              textBg.map((e, i) => <p key={i} style={{
                margin: '0px', ontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: '5em',
                lineHeight: '1em', WebkitTextStroke: '#9665FD 2px', color: i === 0 ? '#9665FD' : 'transparent'
              }}>{e.title} </p>)
            }
          </div>

          <img style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.2 }} src={bgStars} alt="Fondo estrellas" />
        </div>

      </div>
    </AppLayout>
  )
}