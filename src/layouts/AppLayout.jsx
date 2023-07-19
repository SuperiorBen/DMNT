import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import { useState } from 'react';
import logo from "../assets/logo.svg";

export const AppLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const optionMenu = [ 
    {text: '¿QUIÉNES SOMOS?', url:'/quienes-somos'},
    {text: 'SERVICIOS', url:'/servicios'},
    {text: 'CONTACTO', url:'/contacto'},
  ]

  // Variants for animations
  const btnVariants = {
    open: { rotate: 45, y: 6 },
    open2: { rotate: -45, y: -6 },
    closed: { rotate: 0 }
  }

  const bgSectionVariants = {
    closed: { x: '100vw' },
    closed2: { x: '-100vw' },
    open: { x: '0vw' }
  }
  const menuVariants = {
    closed: { x: '100vw' },
    closed2: { x: '-100vw' },
    open: { x: '0vw' }
  }

  const textVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  }

  const openAction = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Toggle btn */}
      <div style={contentToggle}>
        <div onClick={openAction} style={btnStyle}>
          <motion.div animate={isOpen ? "open" : "closed"} variants={btnVariants} style={pathLine} />
          {!isOpen && <motion.div style={pathLine} />}
          <motion.div animate={isOpen ? "open2" : "closed"} variants={btnVariants} style={pathLine} />
        </div>
        <img src={logo} alt="logo" loading='lazy' style={{ width: '65%' }} />
      </div>

      <div style={contentBg}>
          <motion.div style={menuSection}
          initial={{ x: '100vw' }} 
          animate={ isOpen ? "open" : "closed"} 
          variants={menuVariants}
          transition={{ease: "easeIn", duration: 0.3}}
          >
            {
              optionMenu.map( (item) =>  <motion.p key={item.url} 
              animate={isOpen ? "open" : "closed"} 
              variants={textVariants}  
              transition={{ease: "easeIn", 
              duration: 0.2, delay:0.6}}  
              className='title-menu'>{item.text}</motion.p>  )
            }
          </motion.div>
          <motion.div style={{...bgSection}} 
          initial={{ x: '100vw' }} 
          animate={ isOpen ? "open" : "closed"} 
          variants={bgSectionVariants} 
          transition={{ease: "easeIn", duration: 0.5}} />
          <motion.div style={{...bgSection, top: '50vh'}} 
          initial={{ x: '-100vw' }} 
          animate={ isOpen ? "open" : "closed2"} 
          variants={bgSectionVariants} 
          transition={{ease: "easeIn", duration: 0.5}} />
      </div>

      {/* Content pages */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        {children}
      </div>
    </>

  )
}

// Styles
// Togle btn
const contentToggle = { 
  position: 'fixed', 
  top: 0, 
  left: 0, 
  zIndex: 999, 
  width: '10em', 
  display: 'flex', 
  justifyContent: 'flex-start', 
  alignItems: 'center' }

const btnStyle = {
  backgroundColor: '#322aa4', 
  borderRadius: '0em', 
  border: '3px solid #fff', 
  width: '3em', 
  height: '3em', 
  display: 'flex',
  flexDirection: 'column', 
  justifyContent: 'space-evenly', 
  alignItems: 'center', 
  paddingTop: '0.3em', 
  paddingBottom: '0.3em', 
  cursor: 'pointer', 
  marginRight: '0.5em'
}
const pathLine = { 
  backgroundColor: '#fff', 
  width: '1.5em', 
  height: '0.2em', 
  borderRadius: 5 }

// Menu viewport
const contentBg = { 
  position: 'fixed', 
  top: 0, 
  left: 0, 
  zIndex: 990, 
  width:'100vw', 
  height:'100vh', 
  overflow:'hidden'}

const bgSection = { 
  backgroundColor: '#322aa4',  
  width:'100vw', 
  height:'50vh', 
  position: 'absolute', 
  top: 0
}

const menuSection = {
  position:'absolute',
  top:'10%', 
  left:'6%', 
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'flex-start',
  zIndex: 991,
  width: window.screen.width > 900 ? 'calc( 50% - 10vw )' : '100%'
}

// Props validation
AppLayout.propTypes = {
  children: PropTypes.node
};

