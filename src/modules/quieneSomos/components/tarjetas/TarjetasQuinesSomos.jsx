
import logoDmnt from '../../../../assets/logoFull.svg'
import sitAstronaut from '../../assets/tarjetas/sitAstronaut.webp'
import { useState } from 'react'
import flyAstronaut from '../../assets/tarjetas/psyco-halo.webp'
import world from '../../assets/tarjetas/world.png'
import glitchAstronaut from '../../assets/tarjetas/psyco-astro.gif'

import chunk1 from '../../assets/tarjetas/chunksVision/chunk-1.webp'
import chunk2 from '../../assets/tarjetas/chunksVision/chunk-2.webp'
import chunk3 from '../../assets/tarjetas/chunksVision/chunk-3.webp'
import chunk4 from '../../assets/tarjetas/chunksVision/chunk-4.webp'
import chunk5 from '../../assets/tarjetas/chunksVision/chunk-5.webp'
import chunk6 from '../../assets/tarjetas/chunksVision/chunk-6.webp'




import { TarjetaContenedor } from './TarjetaContenedor'
import Marquee from "react-fast-marquee";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

// Css variable
const chunkStyle = {
  height: '8em', borderRadius: '5px', opacity: 0.8, margin: '0em 1.5em',
  boxShadow: '0px 0px 2px rgba(150, 101, 253, 0.8), 0px 0px 10px rgba(150, 101, 253, 0.3)'
}

export const TarjetasQuinesSomos = () => {

  const [section, setSection] = useState(3)

  // Control scroll 
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollPosition = latest.toFixed(2)
    scrollPosition < 0.10 && setSection(3)
    scrollPosition > 0.15 && setSection(0)
    scrollPosition > 0.26 && setSection(1)
    scrollPosition > 0.37 && setSection(2)
    scrollPosition > 0.50 && setSection(3)

    console.log(section)
  })

  return (
    <div style={{
      height: '100vh', width: window.screen.width > 900 ? `calc(100vw - 29em)` : '100vw', position: 'fixed', top: 0,
      right: 0, zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>

      {/* Tarjeta #1 ===================================================================================================== */}
      <TarjetaContenedor option="0" visible={section}>
        <img src={logoDmnt} alt="logoDmnt" style={{
          width: '10em', height: '4em', position: 'absolute',
          bottom: window.screen.width > 900 ? '16em' : '20em', left: '5%'
        }} />
        <img src={glitchAstronaut} style={{ width: '10em', height: '20em', position: 'absolute', bottom: '-1em', left: 'calc( 50% - 5em )' }} className='astronaut' />
      </TarjetaContenedor>


      {/* Tarjeta #2 ===================================================================================================== */}
      <TarjetaContenedor option="1" visible={section}>
        <Marquee speed={8} style={{ height: '9em', position: 'relative', zIndex: 1, marginTop: '2em' }}>
          <img src={chunk1} alt="chunk" style={chunkStyle} />
          <img src={chunk2} alt="chunk" style={chunkStyle} />
          <img src={chunk3} alt="chunk" style={chunkStyle} />
        </Marquee>
        <Marquee direction='right' speed={10} style={{ height: '9em', position: 'relative', zIndex: 1 }}>
          <img src={chunk4} alt="chunk" style={chunkStyle} />
          <img src={chunk5} alt="chunk" style={chunkStyle} />
          <img src={chunk6} alt="chunk" style={chunkStyle} />
        </Marquee>
        <img src={sitAstronaut} alt="sitAstronaut" style={{ width: '75%', margin: '3em', position: 'absolute', bottom: '-5em', left: '-5em', zIndex: 2 }} />
      </TarjetaContenedor>


      {/* Tarjeta #3 ===================================================================================================== */}
      <TarjetaContenedor option="2" visible={section}>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'end', position: 'absolute', top: 0 }}>
          <motion.img animate={{ x: [0, 30, 10], y: [0, 25, 55] }}
            transition={{ repeatType: "reverse", repeat: Infinity, duration: 10, ease: "easeInOut" }}
            src={flyAstronaut} alt="flyAstronaut" style={{ height: '60%', margin: 'auto', position: 'absolute', zIndex: 1 }} />
          <motion.img animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
            src={world} alt="world" style={{
              width: window.screen.width > 900 ? '50vw' : '200vw', margin: 'auto',
              opacity: 0.9, position: 'absolute', zIndex: 0, bottom: window.screen.width > 900 ? '-25vw' : '-100vw'
            }} />
        </div>
      </TarjetaContenedor>
    </div>
  )
}
