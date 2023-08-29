import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
import { cssCardContainer } from "../../helpers/StyleCardsQuienesSomos"

const tarjeta = [
  {
    title: '¿QUIENES SOMOS?',
    text: 'Nos llaman DEMENTES, rebeldes, quiénes inventan las reglas somos genios, vamos más alla de las buenas ideas.',
    icon: cssCardContainer.iconQuienesSomos,
    bg: cssCardContainer.bgQuienesSomos
  },
  {
    title: 'VISIÓN',
    text: 'Seguir revolucionando el mundo del marketing y publicidad con ideas dementes y poderosas.',
    icon: cssCardContainer.iconVision,
    bg: cssCardContainer.bgVision
  },
  {
    title: 'MISIÓN',
    text: 'Crear impacto con potencia en proyectos y personas en el mundo a travez del marketing y la publicidad.',
    icon: cssCardContainer.iconMision,
    bg: cssCardContainer.bgMision
  }
]

export default function TarjetaContenedor ({ children, option, visible }) {

  return (
    <motion.div
      layout
      style={{ ...cssCardContainer.cardContainer, backgroundImage: `url(${tarjeta[option].bg})`, zIndex: option, opacity: visible == option ? 1 : 0, }}>

      <motion.img
        animate={{ x: [-15, 10, 0], y: [-5, 0, -5] }}
        transition={{ repeatType: "reverse", repeat: Infinity, duration: 10, ease: "easeInOut" }}
        src={cssCardContainer.bubbleBlue} alt="bubbleBlue" style={cssCardContainer.cssBBlue} />

      <motion.img
        animate={{ x: [0, 10, -5], y: [10, 15, 5] }}
        transition={{ repeatType: "reverse", repeat: Infinity, duration: 8, ease: "easeInOut" }}
        src={cssCardContainer.bubblePurple} alt="bubblePurple" style={cssCardContainer.cssBPurple} />

      <div style={cssCardContainer.contentTitle}>
        <p style={cssCardContainer.title}>{tarjeta[option].title}</p>
        <div style={cssCardContainer.contentInfo}>
          <img style={{ width: '7em' }} src={tarjeta[option].icon} alt="icon" />
          <p style={cssCardContainer.textInfo}>{tarjeta[option].text}</p>
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