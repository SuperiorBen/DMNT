
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

export const TarjetaContenedor = ({ children, option, visible }) => {

  return (
    <motion.div
    layout
      style={{
        margin: 'auto',
        marginTop: window.screen.width > 900 ? 'none' : '8em',
        width: window.screen.width > 900 ? '25em' : '90vw',
        height: window.screen.width > 900 ? '95vh' : '80vh',
        maxHeight: '720px',
        backgroundImage: `url(${tarjeta[option].bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '5px',
        boxShadow: '3px 3px 5px #00000061',
        position: 'absolute',
        overflow: 'hidden',
        zIndex: option,
        opacity: visible == option ? 1 : 0,
        transition:'opacity 0.5s ease-in-out, transform 1s ease-in-out',
        transform: visible == option ? 'rotateY(0deg)' : 'rotateY(90deg)',
      }}>

      <motion.img animate={{ x: [-15, 10, 0], y: [-5, 0, -5] }}
        transition={{ repeatType: "reverse", repeat: Infinity, duration: 10, ease: "easeInOut" }}
        src={bubbleBlue} alt="bubbleBlue" style={{ width: "5em", position: 'absolute', top: 80, left: 50 }} />

      <motion.img animate={{ x: [0, 10, -5], y: [10, 15, 5] }}
        transition={{ repeatType: "reverse", repeat: Infinity, duration: 8, ease: "easeInOut" }}
        src={bubblePurple} alt="bubblePurple" style={{ width: "6em", position: 'absolute', top: 40, right: 90 }} />

      <div style={{
        backdropFilter: 'blur(2px)', background: 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)', borderRadius: '10px', boxShadow: '2px 2px 2px rgba(0,0,0,0.1)',
        width: '95%', margin: 'auto', marginTop: '1em', padding: '1em 0.5em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
        <p style={{ color: '#fff', margin: 0, fontSize: '1.8em', fontWeight: 600, lineHeight: '1em', width: '100%', textAlign: 'center' }}>{tarjeta[option].title}</p>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '0.5em' }}>
          <img style={{ width: '7em' }} src={tarjeta[option].icon} alt="icon" />
          <p style={{ color: '#fff', margin: 0, fontSize: '1em', fontWeight: 400, lineHeight: '1.3em', width: 'calc( 90% - 7em )' }}>{tarjeta[option].text}</p>
        </div>
      </div>

      {children}
    </motion.div>
  )
}


// Props validation
TarjetaContenedor.propTypes = {
  children: PropTypes.node,
  option: PropTypes.string,
  visible: PropTypes.number
};