
import logoDmnt from '../../../../assets/logoFull.svg'
import sitAstronaut from '../../assets/tarjetas/sitAstronaut.webp'
import flyAstronaut from '../../assets/tarjetas/psyco-halo.webp'

import chunk1 from '../../assets/tarjetas/chunksVision/chunk-1.webp'
import chunk2 from '../../assets/tarjetas/chunksVision/chunk-2.webp'
import chunk3 from '../../assets/tarjetas/chunksVision/chunk-3.webp'
import chunk4 from '../../assets/tarjetas/chunksVision/chunk-4.webp'
import chunk5 from '../../assets/tarjetas/chunksVision/chunk-5.webp'
import chunk6 from '../../assets/tarjetas/chunksVision/chunk-6.webp'



import '../../assets/css/styleQuienesSomos.css'
import { TarjetaContenedor } from './TarjetaContenedor'
import Marquee from "react-fast-marquee";

export const TarjetasQuinesSomos = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', top: 0, left: 0, zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TarjetaContenedor option="0">
        <img src={logoDmnt} alt="logoDmnt" style={{ width: '50%', margin: '3em' }} />
        <div className='astronaut' />
      </TarjetaContenedor>
      <TarjetaContenedor option="1">
      <Marquee speed={5} style={{height:'8em', position:'relative', zIndex:1, marginTop:'2em'}}>
        <img src={chunk1} alt="chunk" style={{height:'7em', borderRadius:'5px', opacity:0.8, margin:'0em 2em'}} />
        <img src={chunk2} alt="chunk" style={{height:'7em', borderRadius:'5px', opacity:0.8, margin:'0em 2em'}} />
        <img src={chunk3} alt="chunk" style={{height:'7em', borderRadius:'5px', opacity:0.8, margin:'0em 2em'}} />
      </Marquee>
      <Marquee direction='right' speed={5} style={{height:'8em', position:'relative', zIndex:1}}>
        <img src={chunk4} alt="chunk" style={{height:'7em', borderRadius:'5px', opacity:0.8, margin:'0em 2em'}} />
        <img src={chunk5} alt="chunk" style={{height:'7em', borderRadius:'5px', opacity:0.8, margin:'0em 2em'}} />
        <img src={chunk6} alt="chunk" style={{height:'7em', borderRadius:'5px', opacity:0.8, margin:'0em 2em'}} />
      </Marquee>
        <img src={sitAstronaut} alt="sitAstronaut" style={{ width: '80%', margin: '3em', position:'absolute', bottom:'-5em', left:'-5em', zIndex:2}} />
      </TarjetaContenedor>
      <TarjetaContenedor option="2">
        <img src={flyAstronaut} alt="flyAstronaut" style={{ width: '90%', margin: 'auto', opacity:0.9 }} />
      </TarjetaContenedor>
    </div>
  )
}
