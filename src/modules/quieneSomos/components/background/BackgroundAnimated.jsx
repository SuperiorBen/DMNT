import bgCreativa from "../../assets/background/bgTeamWork.png"
import bgTwist from "../../assets/background/psycoTwister.svg"
import bgStars from "../../assets/stars-bg.webp"
import scrolldots from "../../assets/background/animations/scrolldot.json"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react"
import '../../assets/css/styleQuienesSomos.css'

// Number of lines text control 
const controlTime = window.screen.width > 900 ? 6 : 1
let textTimes = controlTime
let textBg = []
while (textTimes >= 0) {
    textBg.push({ title: 'SOBRE NOSOTROS' })
    textTimes = --textTimes
}


// css variables
const xTwister = window.screen.width > 900 ? `calc(100vw - 29em)` : `calc(100vw - (27em - 14em))`
const sizeAniText = window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '5em'

export const BackgroundAnimated = () => {

    const { scrollYProgress } = useScroll()

    // Twister background control 
    const [isOpen, setOpen] = useState(false)
    // Text background animate control
    const [textAnimate, setTextAnimate] = useState(0)
    // content letter animate
    const ref = useRef(null);

    // Letter animated funtions ===========================================================

    useEffect(() => {
        ref.current.children[textAnimate].style.color = 'rgb(150 101 253 / 80%)'
    }, [textAnimate])

    useEffect(() => {
        const timer = setTimeout(() => {
            isOpen === false && setOpen(!isOpen)
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const runTextAnimate = () => {
        ref.current.children[textAnimate].style.color = 'transparent'
        if (textAnimate < controlTime) {
            setTextAnimate(textAnimate + 1)
        } else {
            setTextAnimate(0)
        }
    }
    setTimeout(runTextAnimate, 500);
    // END Letter animated funtions ===========================================================


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
    })

    return (
        <div className="background" style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>

            <img src={bgCreativa} alt="bgCreativa" style={{ height: '100vh', width: window.screen.width > 900 ? '29em' : '27em', position: 'absolute', top: 0, left: window.screen.width > 900 ? "0em" : "-14em", zIndex: 1, mixBlendMode: 'multiply' }} />

            <motion.div layout transition={{ duration: 0.7 }}
                style={{
                    height: '100vh', width: xTwister,
                    position: 'absolute', top: 0, right: isOpen ? `calc(-1 * ${xTwister})` : 0,
                    zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'
                }}>
                <motion.img animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    src={bgTwist} alt="twister" style={{ height: window.screen.width > 900 ? '200%' : '120%' }} />
            </motion.div>

            <div ref={ref} className="staggertext" style={{
                height: '100vh', width: xTwister, position: 'absolute', top: 0, right: 0,
                zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column-reverse', overflow: 'hidden',
                writingMode: window.screen.width > 900 ? 'horizontal-tb' : 'vertical-lr', textOrientation: 'mixed'
            }}>

                {
                    textBg.map((e, i) => <p key={i} style={{
                        margin: '0px', ontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: sizeAniText,
                        lineHeight: '1em', WebkitTextStroke: 'rgb(150 101 253 / 60%) 2px', color: 'transparent', 
                        userSelect: 'none'
                    }}>{e.title}</p>)
                }
                <Lottie style={{ position: 'absolute', left: window.screen.width > 900  ? '1em' : '0em', bottom: 0, height: '70vh' }} animationData={scrolldots} />
            </div>

            <img style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.2 }} src={bgStars} alt="Fondo estrellas" />
        </div>
    )
}
