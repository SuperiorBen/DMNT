import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import { useState } from 'react';
import logo from "../assets/logo.svg";
import { stylesMenu } from '../helpers/stylesMenu'


import Marquee from "react-fast-marquee";
import { useHoverMenu } from '../hooks/useHoverMenu';

export const AppLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ valueHover, setValueHover ] = useState(0)
  //  Custom hook
  const { title, imgInBg,imgInBgStyle, bg } = useHoverMenu(valueHover)

  const hoverAction = (e,id) => {
    e.preventDefault()
    setValueHover(id)
  }


  const optionMenu = [
    { id: 0, text: '¿QUIÉNES SOMOS?', url: '/quienes-somos' },
    { id: 1, text: 'SERVICIOS', url: '/servicios' },
    { id: 2, text: 'CONTACTO', url: '/contacto' },
  ]



  const openAction = () => {
    setIsOpen(!isOpen)
  }

  const marqueeContent = ['', '', '', '', '', '', '', '', '']

  return (
    <>
      {/* Toggle btn */}
      <div style={stylesMenu.contentToggle}>
        <div onClick={openAction} style={stylesMenu.btnStyle}>
          <motion.div animate={isOpen ? "open" : "closed"} variants={stylesMenu.btnVariants} style={stylesMenu.pathLine} />
          {!isOpen && <motion.div style={stylesMenu.pathLine} />}
          <motion.div animate={isOpen ? "open2" : "closed"} variants={stylesMenu.btnVariants} style={stylesMenu.pathLine} />
        </div>
        <img src={logo} alt="logo" loading='lazy' style={{ width: '65%' }} />
      </div>

      <div style={stylesMenu.contentBg}>
        <motion.div style={stylesMenu.menuSection}
          initial={{ x: '100vw' }}
          animate={isOpen ? "open" : "closed"}
          variants={stylesMenu.menuVariants}
          transition={{ ease: "easeIn", duration: 0.3 }}
        >
          {
            optionMenu.map((item) => <motion.p key={item.url}
              initial={{ opacity: 0 }}
              animate={isOpen ? "open" : "closed"}
              variants={stylesMenu.textVariants}
              transition={{
                ease: "easeIn",
                duration: 0.2, delay: 0.6
              }}
              className='title-menu'
              onMouseEnter={ e => hoverAction(e, item.id)}
            >{item.text}</motion.p>)
          }
        </motion.div>

        <motion.div style={stylesMenu.imageSection}
          initial={{ x: '-100vw', opacity: 0 }}
          animate={isOpen ? "open" : "closed2"}
          variants={stylesMenu.menuVariants}
          transition={{ ease: "easeIn", duration: 0.5, opacity: { duration: 0.1 } }}>
          <div style={stylesMenu.marqueContent}>
            <Marquee speed={5} style={stylesMenu.marqueStyle}>
              {
                marqueeContent.map((value, index) => <img key={index} src={logo} alt="logo" loading='lazy'
                  style={{
                    width: '10em',
                    margin: '1em'
                  }} />)
              }
            </Marquee>
          </div>

          <div style={{ ...stylesMenu.imgContent, backgroundImage: `url(${bg})` }}>
            <p style={stylesMenu.pTitle}>{title}</p>
            <img src={imgInBg} alt="imgInBg" style={{ ...stylesMenu.imgItem, ...imgInBgStyle }} />
          </div>
        </motion.div>
        <motion.div style={{ ...stylesMenu.bgSection }}
          initial={{ x: '100vw' }}
          animate={isOpen ? "open" : "closed"}
          variants={stylesMenu.bgSectionVariants}
          transition={{ ease: "easeIn", duration: 0.5 }} />
        <motion.div style={{ ...stylesMenu.bgSection, top: '50vh' }}
          initial={{ x: '-100vw' }}
          animate={isOpen ? "open" : "closed2"}
          variants={stylesMenu.bgSectionVariants}
          transition={{ ease: "easeIn", duration: 0.5 }} />
      </div>

      {/* Content pages */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        {children}
      </div>
    </>

  )
}


// Props validation
AppLayout.propTypes = {
  children: PropTypes.node
};

