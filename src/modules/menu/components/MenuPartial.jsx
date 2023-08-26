import { useState, useEffect } from 'react';
import logo from "../../../assets/logo.svg";
import { cssMenu, optionMenu } from '../helpers/stylesMenu'
import Marquee from "react-fast-marquee";
import { AnimatePresence, motion } from "framer-motion"

export const MenuPartial = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [moveLayer, setMoveLayer] = useState()
    const [valueHover, setValueHover] = useState(0)

    useEffect(() => {
        setMoveLayer(990)
        const timer = setTimeout(() => {
            isOpen == false && setMoveLayer(-1)
        }, 1000)
        return () => clearTimeout(timer);
    }, [isOpen])



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
            <div style={cssMenu.contentToggle}>
                <div onClick={openAction} style={cssMenu.btnStyle}>
                    <motion.div animate={isOpen ? "open" : "closed"} variants={cssMenu.btnVariants} style={cssMenu.pathLine} />
                    {!isOpen && <motion.div style={cssMenu.pathLine} />}
                    <motion.div animate={isOpen ? "open2" : "closed"} variants={cssMenu.btnVariants} style={cssMenu.pathLine} />
                </div>
                <a href="/" style={{ width: '65%' }} title='Home'>
                    <img src={logo} alt="logo" loading='lazy' style={{ width: '100%', height:'100%' }} />
                </a>
            </div>

            <div style={{ ...cssMenu.contentBg, zIndex: isOpen ? 990 : moveLayer }}>
                {/* Opciones del menu ============================================================================*/}
                <motion.div style={cssMenu.menuSection}
                    initial={{ x: '100vw' }}
                    animate={isOpen ? "open" : "closed"}
                    variants={cssMenu.menuVariants}
                    transition={{ ease: "easeIn", duration: 0.3 }}
                >
                    {
                        optionMenu.map((item) => <motion.a
                            href={item.url}
                            key={item.url}
                            initial={{ opacity: 0 }}
                            animate={isOpen ? "open" : "closed"}
                            variants={cssMenu.textVariants}
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
                <motion.div style={cssMenu.imageSection}
                    initial={{ x: '-100vw', opacity: 0 }}
                    animate={isOpen ? "open" : "closed2"}
                    variants={cssMenu.menuVariants}
                    transition={{ ease: "easeIn", duration: 0.5, opacity: { duration: 0.1 } }}>
                    <div style={cssMenu.marqueContent}>
                        <Marquee speed={5} style={cssMenu.marqueStyle}>
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
                <motion.div style={{ ...cssMenu.bgSection }}
                    initial={{ x: '100vw' }}
                    animate={isOpen ? "open" : "closed"}
                    variants={cssMenu.bgSectionVariants}
                    transition={{ ease: "easeIn", duration: 0.5 }} />
                <motion.div style={{ ...cssMenu.bgSection, top: '50vh' }}
                    initial={{ x: '-100vw' }}
                    animate={isOpen ? "open" : "closed2"}
                    variants={cssMenu.bgSectionVariants}
                    transition={{ ease: "easeIn", duration: 0.5 }} />
            </div>
        </>
    )
}
