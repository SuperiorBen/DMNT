import { lazy, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Marquee from "react-fast-marquee";

const TarjetaContenedor = lazy(() => import('./TarjetaContenedor'))
import { cssCardsQS } from "../../helpers/StyleCardsQuienesSomos"



export default function TarjetasQuinesSomos () {

  const [section, setSection] = useState(3)

  // Control scroll 
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollPosition = latest.toFixed(2)
    scrollPosition < 0.20 && setSection(3)
    scrollPosition > 0.25 && setSection(0)
    scrollPosition > 0.40 && setSection(1)
    scrollPosition > 0.65 && setSection(2)
    scrollPosition > 0.85 && setSection(3)
  })

  return (
    <div style={cssCardsQS.contentCards}>

      {/* Tarjeta #1 ===================================================================================================== */}
      <TarjetaContenedor option="0" visible={section}>
        <img src={cssCardsQS.logoDmnt} alt="logoDmnt" style={cssCardsQS.card1Logo} />
        <img src={cssCardsQS.glitchAstronaut} alt='glitchAstronaut' style={cssCardsQS.astroGlitch} />
      </TarjetaContenedor>


      {/* Tarjeta #2 ===================================================================================================== */}
      <TarjetaContenedor option="1" visible={section}>
        <Marquee speed={8} style={{ height: '9em', position: 'relative', zIndex: 1, marginTop: '2em' }}>
          <img src={cssCardsQS.chunk1} alt="chunk" style={cssCardsQS.chunkStyle} />
          <img src={cssCardsQS.chunk2} alt="chunk" style={cssCardsQS.chunkStyle} />
          <img src={cssCardsQS.chunk3} alt="chunk" style={cssCardsQS.chunkStyle} />
        </Marquee>
        <Marquee direction='right' speed={10} style={{ height: '9em', position: 'relative', zIndex: 1 }}>
          <img src={cssCardsQS.chunk4} alt="chunk" style={cssCardsQS.chunkStyle} />
          <img src={cssCardsQS.chunk5} alt="chunk" style={cssCardsQS.chunkStyle} />
          <img src={cssCardsQS.chunk6} alt="chunk" style={cssCardsQS.chunkStyle} />
        </Marquee>
        <img src={cssCardsQS.sitAstronaut} alt="sitAstronaut" style={cssCardsQS.astroSit} />
      </TarjetaContenedor>


      {/* Tarjeta #3 ===================================================================================================== */}
      <TarjetaContenedor option="2" visible={section}>
        <div style={cssCardsQS.card3Content}>
          <motion.img
            animate={{ x: [0, 30, 10], y: [0, 25, 55] }}
            transition={{ repeatType: "reverse", repeat: Infinity, duration: 10, ease: "easeInOut" }}
            src={cssCardsQS.flyAstronaut} alt="flyAstronaut" style={cssCardsQS.astroFly} />
          <motion.img
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
            src={cssCardsQS.world} alt="world" style={cssCardsQS.dmntWorld} />
        </div>
      </TarjetaContenedor>
    </div>
  )
}
