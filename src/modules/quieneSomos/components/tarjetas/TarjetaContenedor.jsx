
import bgQuienesSomos from '../../assets/tarjetas/psyco-patron2.webp'
import bgVision from '../../assets/tarjetas/bgVision.webp'
import bgMision from '../../assets/tarjetas/bgMision.webp'
import bubblePurple from '../../assets/tarjetas/bubblePurple.svg'
import bubbleBlue from '../../assets/tarjetas/bubbleBlue.svg'
import iconQuienesSomos from '../../assets/tarjetas/iconQuienesSomos.webp'
import iconVision from '../../assets/tarjetas/iconVision.webp'
import iconMision from '../../assets/tarjetas/iconMision.webp'

import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

const tarjeta = [
  {
    title: '¿QUIENES SOMOS?',
    text: 'Nos llaman DEMENTES, rebeldes, quiénes inventan las reglas somos genios, vamos más alla de las de las ideas.',
    icon: iconQuienesSomos,
    bg: bgQuienesSomos
  },
  {
    title: 'VISIÓN',
    text: 'Seguir revolucionando el mundo del marketing y publicidad con ideas dementes y poderosas.',
    icon: iconVision,
    bg: bgVision
  },
  {
    title: 'MISIÓN',
    text: 'Crear impacto con potencia en proyectos y personas en el mundo a travez del marketing y la publicidad.',
    icon: iconMision,
    bg: bgMision
  }
]

export const TarjetaContenedor = ({ children, option }) => {

  return (
    <div style={{
      marginTop: '5em',
      width: '22em',
      height: '40em',
      backgroundImage: `url(${tarjeta[option].bg})`,
      backgroundPosition: 'center',
      backgroundSize: '225%',
      backgroundRepeat: 'no-repeat',
      borderRadius: '5px',
      boxShadow: '3px 3px 5px #00000061',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <motion.img animate={{ x: [-15, 10, 0], y: [-5, 0, -5] }}
        transition={{ repeatType: "reverse", repeat: Infinity, duration: 10, ease: "easeInOut" }}
        src={bubbleBlue} alt="bubbleBlue" style={{ width: "5em", position: 'absolute', top: 80, left: 50 }} />

      <motion.img animate={{ x: [0, 10, -5], y: [10, 15, 5] }}
        transition={{ repeatType: "reverse", repeat: Infinity, duration: 8, ease: "easeInOut" }}
        src={bubblePurple} alt="bubblePurple" style={{ width: "6em", position: 'absolute', top: 40, right: 90 }} />

      <div style={{
        backdropFilter: 'blur(2px)', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px', boxShadow: '2px 2px 2px rgba(0,0,0,0.1)',
        width: '95%', margin: 'auto', marginTop: '1em', padding: '1em', display: 'grid', gridTemplateColumns: 'repeat( 2, 1fr )', gridTemplateRows: 'minmax(auto)', rowGap: '0.5em', columnGap: '1em'
      }}>
        <p style={{ color: '#fff', margin: 0, fontSize: '1.8em', fontWeight: 600, lineHeight: '1em', width: '100%', gridColumn: '1/3' }}>{tarjeta[option].title}</p>
        <img style={{ width: '6em', gridColumn: '1' }} src={tarjeta[option].icon} alt="icon" />
        <p style={{ color: '#fff', margin: 0, fontSize: '1em', fontWeight: 100, lineHeight: '1.2em', width: '12em', gridColumn: '2' }}>{tarjeta[option].text}</p>
      </div>

      {children}
    </div>
  )
}


// Props validation
TarjetaContenedor.propTypes = {
  children: PropTypes.node,
  option: PropTypes.string
};