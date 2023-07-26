
import logoDmnt from '../../../../assets/logoFull.svg'
import sitAstronaut from '../../assets/tarjetas/sitAstronaut.webp'
import flyAstronaut from '../../assets/tarjetas/psyco-halo.webp'
import glitchAstronaut from '../../assets/tarjetas/psyco-astro.gif'

import chunk1 from '../../assets/tarjetas/chunksVision/chunk-1.webp'
import chunk2 from '../../assets/tarjetas/chunksVision/chunk-2.webp'
import chunk3 from '../../assets/tarjetas/chunksVision/chunk-3.webp'
import chunk4 from '../../assets/tarjetas/chunksVision/chunk-4.webp'
import chunk5 from '../../assets/tarjetas/chunksVision/chunk-5.webp'
import chunk6 from '../../assets/tarjetas/chunksVision/chunk-6.webp'




import { TarjetaContenedor } from './TarjetaContenedor'
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion'

export const TarjetasQuinesSomos = () => {


  return (
    <>
      <TarjetaContenedor option="0">
        <img src={logoDmnt} alt="logoDmnt" style={{ width: '10em', margin: '3em 0em 0em 4em' }} />
        <img src={glitchAstronaut} style={{ width: '10em', height: '20em', position: 'relative', bottom: '-5em', left: '25%' }} className='astronaut' />
      </TarjetaContenedor>
      <TarjetaContenedor option="1">
        <Marquee speed={8} style={{ height: '9em', position: 'relative', zIndex: 1, marginTop: '2em' }}>
          <img src={chunk1} alt="chunk" style={{ height: '8em', borderRadius: '5px', opacity: 0.8, margin: '0em 1em', boxShadow: '0px 0px 2px rgba(150, 101, 253, 0.8), 0px 0px 10px rgba(150, 101, 253, 0.3)' }} />
          <img src={chunk2} alt="chunk" style={{ height: '8em', borderRadius: '5px', opacity: 0.8, margin: '0em 1em', boxShadow: '0px 0px 2px rgba(150, 101, 253, 0.8), 0px 0px 10px rgba(150, 101, 253, 0.3)' }} />
          <img src={chunk3} alt="chunk" style={{ height: '8em', borderRadius: '5px', opacity: 0.8, margin: '0em 1em', boxShadow: '0px 0px 2px rgba(150, 101, 253, 0.8), 0px 0px 10px rgba(150, 101, 253, 0.3)' }} />
        </Marquee>
        <Marquee direction='right' speed={10} style={{ height: '9em', position: 'relative', zIndex: 1 }}>
          <img src={chunk4} alt="chunk" style={{ height: '8em', borderRadius: '5px', opacity: 0.8, margin: '0em 1em', boxShadow: '0px 0px 2px rgba(150, 101, 253, 0.8), 0px 0px 10px rgba(150, 101, 253, 0.3)' }} />
          <img src={chunk5} alt="chunk" style={{ height: '8em', borderRadius: '5px', opacity: 0.8, margin: '0em 1em', boxShadow: '0px 0px 2px rgba(150, 101, 253, 0.8), 0px 0px 10px rgba(150, 101, 253, 0.3)' }} />
          <img src={chunk6} alt="chunk" style={{ height: '8em', borderRadius: '5px', opacity: 0.8, margin: '0em 1em', boxShadow: '0px 0px 2px rgba(150, 101, 253, 0.8), 0px 0px 10px rgba(150, 101, 253, 0.3)' }} />
        </Marquee>
        <img src={sitAstronaut} alt="sitAstronaut" style={{ width: '80%', margin: '3em', position: 'absolute', bottom: '-5em', left: '-5em', zIndex: 2 }} />
      </TarjetaContenedor>
      <TarjetaContenedor option="2">
        <motion.img animate={{ x: [0, 30, 10], y: [0, 25, 55] }}
          transition={{ repeatType: "reverse", repeat: Infinity, duration: 10, ease: "easeInOut" }} src={flyAstronaut} alt="flyAstronaut" style={{ width: '90%', margin: 'auto', opacity: 0.9 }} />
      </TarjetaContenedor>
    </>
  )
}
