import { useState } from 'react';

import logo from "../../../assets/logo.svg";
import { stylesMenu, optionMenu } from '../helpers/stylesMenu'


import Marquee from "react-fast-marquee";
import { AnimatePresence, motion } from "framer-motion"

export const MenuPartial = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [valueHover, setValueHover] = useState(0)

    //  FN: Hover sobre opciones de menu para mostrar imagenes
    const hoverAction = (e, id) => {
        e.preventDefault()
        setValueHover(id)
    }

    // FN: Abrir/cerrar el menu
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
                <a href="/" style={{ width: '65%' }} title='Home'>
                <img src={logo} alt="logo" loading='lazy' style={{ width: '100%' }} />
                </a>
            </div>

            <div style={stylesMenu.contentBg}>
                {/* Opciones del menu ============================================================================*/}
                <motion.div style={stylesMenu.menuSection}
                    initial={{ x: '100vw' }}
                    animate={isOpen ? "open" : "closed"}
                    variants={stylesMenu.menuVariants}
                    transition={{ ease: "easeIn", duration: 0.3 }}
                >
                    {
                        optionMenu.map((item) => <motion.a
                            href={item.url}
                            key={item.url}
                            initial={{ opacity: 0 }}
                            animate={isOpen ? "open" : "closed"}
                            variants={stylesMenu.textVariants}
                            transition={{
                                ease: "easeIn",
                                duration: 0.2, delay: 0.6
                            }}
                            className='title-menu'
                            onMouseEnter={e => hoverAction(e, item.id)}
                        >{item.text}</motion.a>)
                    }
                </motion.div>

                {/* Imagenes del menu ============================================================================*/}
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

                    <AnimatePresence>
                        {
                            optionMenu.map((item) =>
                                valueHover === item.id && (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {<item.component />}
                                    </ motion.div>
                                )
                            )
                        }
                    </AnimatePresence>


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
        </>
    )
}
