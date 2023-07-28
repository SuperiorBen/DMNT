import { AppLayout } from "../../../layouts/AppLayout"
import jump from "../assets/jump.png"

import { motion } from "framer-motion"
import { BackgroundAnimated } from "../components/background/BackgroundAnimated"


export const QuienesSomosPages = () => {
  return (
    <AppLayout>
      <div style={{ height: '400vh', width: '100vw', overflowX: 'hidden' }}>

        <motion.img initial={{right:'100%', opacity:0, rotate:0}} animate={{right:'23%', opacity:1, rotate:10}} 
        transition={{duration:1, delay:0.5, rotate:{duration:5, repeatType: "reverse", repeat: Infinity}}}
        src={jump} alt="jump" style={{width:  window.screen.width > 900 ? '28%' : '75%', height: window.screen.width > 900 ? '82%' : '50%' ,
        position: 'fixed', top: window.screen.width > 900 ? 'calc( 18% / 2 )' : '25%' ,  zIndex: 1}} />

        <BackgroundAnimated/>

      </div>
    </AppLayout>
  )
}